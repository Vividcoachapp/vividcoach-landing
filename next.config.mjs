/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Easy share link for beta testers / anyone — sends straight to the
      // App Store listing. Kept in code so it can't silently disappear like
      // the old dashboard-level redirect did. Temporary (307) so the target
      // can be changed later without fighting aggressive browser caching.
      {
        source: '/beta',
        destination: 'https://apps.apple.com/app/vividcoach/id6744742860',
        permanent: false,
      },
    ]
  },
}
export default nextConfig
