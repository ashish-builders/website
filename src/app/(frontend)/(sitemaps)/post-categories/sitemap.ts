import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { GetPostsForSitemapProps } from '@/services/posts/get-posts'
import { unstable_cache as cache } from 'next/cache'
import { getClientSideURL } from '@/lib/get-url'
import { type MetadataRoute } from 'next'
import { getCategoriesForSitemap } from '@/services/category/get-category'

const getCategories = ({ limit, page }: Omit<GetPostsForSitemapProps, 'payload'>) =>
  cache(
    async () => {
      const payload = await getPayload({ config: configPromise })
      const categories = await getCategoriesForSitemap({
        limit,
        page,
        payload,
      })
      return categories
    },
    [
      'posts-categories-sitemap',
      typeof limit === 'string' || typeof limit === 'number' ? limit.toString() : '',
      typeof page === 'string' || typeof page === 'number' ? page.toString() : '',
    ],
    {
      revalidate: 600,
      tags: ['posts-categories-sitemap'],
    },
  )

type SitemapProps = {
  id: number
}

const sitemapSize = 5_000

export async function generateSitemaps(): Promise<SitemapProps[]> {
  const categories = await getCategories({
    limit: sitemapSize,
    page: 1,
  })()

  return Array.from({ length: categories.totalPages }, (_, i) => ({ id: i + 1 }))
}

export default async function sitemap({ id: page }: SitemapProps): Promise<MetadataRoute.Sitemap> {
  const baseURL = getClientSideURL()

  const categories = await getCategories({
    limit: sitemapSize,
    page,
  })()
  return categories.docs.map((post) => {
    return {
      lastModified: new Date(post.createdAt),
      priority: 0.3,
      url: `${baseURL}/blogs/category/${post.slug}`,
    }
  })
}
