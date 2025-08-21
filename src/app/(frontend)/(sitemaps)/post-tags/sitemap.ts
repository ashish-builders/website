import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { GetPostsForSitemapProps } from '@/services/posts/get-posts'
import { unstable_cache as cache } from 'next/cache'
import { getClientSideURL } from '@/lib/get-url'
import { type MetadataRoute } from 'next'
import { getTagsForSitemap } from '@/services/tag/get-tag'

const getTags = ({ limit, page }: Omit<GetPostsForSitemapProps, 'payload'>) =>
  cache(
    async () => {
      const payload = await getPayload({ config: configPromise })
      const tags = await getTagsForSitemap({
        limit,
        page,
        payload,
      })
      return tags
    },
    [
      'posts-tags-sitemap',
      typeof limit === 'string' || typeof limit === 'number' ? limit.toString() : '',
      typeof page === 'string' || typeof page === 'number' ? page.toString() : '',
    ],
    {
      revalidate: 600,
      tags: ['posts-tags-sitemap'],
    },
  )

type SitemapProps = {
  id: number
}

const sitemapSize = 5_000

export async function generateSitemaps(): Promise<SitemapProps[]> {
  const tags = await getTags({
    limit: sitemapSize,
    page: 1,
  })()

  return Array.from({ length: tags.totalPages }, (_, i) => ({ id: i + 1 }))
}

export default async function sitemap({ id: page }: SitemapProps): Promise<MetadataRoute.Sitemap> {
  const baseURL = getClientSideURL()

  const tags = await getTags({
    limit: sitemapSize,
    page,
  })()
  return tags.docs.map((post) => {
    return {
      lastModified: new Date(post.createdAt),
      priority: 0.3,
      url: `${baseURL}/blogs/tag/${post.slug}`,
    }
  })
}
