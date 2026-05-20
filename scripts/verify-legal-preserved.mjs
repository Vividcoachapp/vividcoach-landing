#!/usr/bin/env node
// VIV-431 — Preserve /privacy, /terms, /contest-rules across the VIV-423 redesign.
// Apple App Store Connect uses https://www.vivid-coach.com/privacy as the live
// app's privacy policy URL. If that URL changes shape, the live app becomes
// rejection-eligible. This script is the build-time guardrail.

import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');

const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';

const failures = [];
const warnings = [];

function fail(msg) { failures.push(msg); }
function warn(msg) { warnings.push(msg); }

function readIfExists(rel) {
  const p = resolve(root, rel);
  if (!existsSync(p)) return null;
  return readFileSync(p, 'utf8');
}

function checkPageExists(rel) {
  const body = readIfExists(rel);
  if (body == null) {
    fail(`MISSING FILE: ${rel}`);
    return null;
  }
  if (!/export\s+default\s+function/.test(body)) {
    fail(`${rel}: no default exported component (page would 404 at runtime)`);
  }
  return body;
}

function requireText(rel, body, needles) {
  if (body == null) return;
  for (const needle of needles) {
    if (!body.includes(needle)) {
      fail(`${rel}: missing required text "${needle}"`);
    }
  }
}

function requireRegex(rel, body, pattern, label) {
  if (body == null) return;
  if (!pattern.test(body)) {
    fail(`${rel}: missing required pattern (${label})`);
  }
}

// --- /privacy ----------------------------------------------------------------
const privacy = checkPageExists('app/privacy/page.tsx');
requireText('app/privacy/page.tsx', privacy, [
  'body weight',
  'HealthKit',
  'May 19, 2026',
  'Privacy Policy',
]);

// --- /terms ------------------------------------------------------------------
const terms = checkPageExists('app/terms/page.tsx');
requireText('app/terms/page.tsx', terms, [
  'Nutrition tracking',
  'May 19, 2026',
  'Terms of Service',
  'AI Coaching',
]);

// --- /contest-rules ----------------------------------------------------------
const contest = checkPageExists('app/contest-rules/page.tsx');
requireText('app/contest-rules/page.tsx', contest, [
  'Contest Rules',
]);

// --- legal CSS rules ---------------------------------------------------------
// The redesign may rewrite globals.css, but the class hooks the legal pages
// rely on must remain selectable somewhere reachable from those pages.
const cssTargets = [
  'app/globals.css',
  'app/legal.css',
  'app/legal.module.css',
];
let cssBody = '';
for (const rel of cssTargets) {
  const body = readIfExists(rel);
  if (body) cssBody += '\n/* ' + rel + ' */\n' + body;
}
if (!cssBody) {
  fail('No CSS source found for legal pages (looked in: ' + cssTargets.join(', ') + ')');
}

const requiredCssHooks = [
  { selector: '.legal-table', re: /\.legal-table\b/ },
  { selector: '.legal-section h3', re: /\.legal-section\s+h3\b/ },
  { selector: '.legal-section ul', re: /\.legal-section\s+ul\b/ },
  { selector: '.legal-section li', re: /\.legal-section\s+li\b/ },
  { selector: '.legal-container', re: /\.legal-container\b/ },
  { selector: '.legal-title', re: /\.legal-title\b/ },
  { selector: '.legal-section h2', re: /\.legal-section\s+h2\b/ },
];
for (const hook of requiredCssHooks) {
  if (!hook.re.test(cssBody)) {
    fail(`Missing CSS rule for "${hook.selector}" — legal pages will render unstyled`);
  }
}

// --- Footer links from public-facing pages -----------------------------------
// Every page that ships a public footer must link to all three legal routes.
const footerPages = [
  'app/page.tsx',
  'app/privacy/page.tsx',
  'app/terms/page.tsx',
  'app/contest-rules/page.tsx',
];
for (const rel of footerPages) {
  const body = readIfExists(rel);
  if (body == null) {
    fail(`MISSING FILE (footer host): ${rel}`);
    continue;
  }
  requireRegex(rel, body, /href=["']\/privacy["']/, 'footer link to /privacy');
  requireRegex(rel, body, /href=["']\/terms["']/, 'footer link to /terms');
  requireRegex(rel, body, /href=["']\/contest-rules["']/, 'footer link to /contest-rules');
}

// --- Cross-reference link from privacy → contest-rules -----------------------
requireRegex(
  'app/privacy/page.tsx',
  privacy,
  /href=["']\/contest-rules["']/,
  'privacy must link to /contest-rules (referenced from the policy text)'
);

// --- Cross-reference link from terms → privacy and terms → contest-rules ------
requireRegex(
  'app/terms/page.tsx',
  terms,
  /href=["']\/privacy["']/,
  'terms must link to /privacy'
);
requireRegex(
  'app/terms/page.tsx',
  terms,
  /href=["']\/contest-rules["']/,
  'terms must link to /contest-rules'
);

// --- Report ------------------------------------------------------------------
if (warnings.length) {
  for (const w of warnings) console.warn(`${YELLOW}WARN${RESET}  ${w}`);
}
if (failures.length) {
  console.error(`\n${RED}LEGAL PAGE GUARDRAIL FAILED (VIV-431)${RESET}`);
  console.error(`Apple App Store Connect points at /privacy on the live app.`);
  console.error(`The redesign (VIV-423) cannot ship if any of these break:\n`);
  for (const f of failures) console.error(`  ${RED}✗${RESET} ${f}`);
  console.error('');
  process.exit(1);
}
console.log(`${GREEN}✓${RESET} Legal pages preserved (VIV-431): /privacy, /terms, /contest-rules`);
