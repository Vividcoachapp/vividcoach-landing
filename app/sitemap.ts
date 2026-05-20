import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.vivid-coach.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.vivid-coach.com/privacy',
      lastModified: new Date('2026-05-19'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://www.vivid-coach.com/terms',
      lastModified: new Date('2026-05-19'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
