import { getClientSideURL } from '@/lib/get-url'
import type { MetadataRoute } from 'next'
import { generateSitemaps as generatePostSitemaps } from './posts/sitemap'
import { generateSitemaps as generatePostCategoriesSitemaps } from './post-categories/sitemap'
import { generateSitemaps as generatePostTagsSitemaps } from './post-tags/sitemap'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = getClientSideURL()
  const postSitemaps = await generatePostSitemaps()
  const postCategoriesSitemaps = await generatePostCategoriesSitemaps()
  const postTagsSitemaps = await generatePostTagsSitemaps()
  return [
    {
      url: `${baseURL}/pages/sitemap.xml`,
    },
    ...postSitemaps.map(({ id }) => ({
      url: `${baseURL}/posts/sitemap/${id}.xml`,
    })),
    ...postCategoriesSitemaps.map(({ id }) => ({
      url: `${baseURL}/post-categories/sitemap/${id}.xml`,
    })),
    ...postTagsSitemaps.map(({ id }) => ({
      url: `${baseURL}/post-tags/sitemap/${id}.xml`,
    })),
  ]
}
