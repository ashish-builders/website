import { getServerSideURL } from '@/lib/get-url'
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseURL = getServerSideURL()
  return {
    rules: [
      {
        allow: '/',
        disallow: ['/admin', '/admin/*', '/api', '/api/*'],
        userAgent: '*',
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  }
}
