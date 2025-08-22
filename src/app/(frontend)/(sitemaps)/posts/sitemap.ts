import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { getPostsForSitemap, GetPostsForSitemapProps } from '@/services/posts/get-posts';
import { unstable_cache as cache } from 'next/cache';
import { getClientSideURL } from '@/lib/get-url';
import { Media } from '@/payload-types';
import { type MetadataRoute } from 'next';

const getPosts = ({ limit, page }: Omit<GetPostsForSitemapProps, 'payload'>) =>
  cache(
    async () => {
      const payload = await getPayload({ config: configPromise });
      const posts = await getPostsForSitemap({
        limit,
        page,
        payload,
      });
      return posts;
    },
    [
      'posts-sitemap',
      typeof limit === 'string' || typeof limit === 'number' ? limit.toString() : '',
      typeof page === 'string' || typeof page === 'number' ? page.toString() : '',
    ],
    {
      revalidate: 3600,
      tags: ['posts-sitemap'],
    },
  );

type SitemapProps = {
  id: number;
};

const sitemapSize = 5_000;

export async function generateSitemaps(): Promise<SitemapProps[]> {
  const posts = await getPosts({
    limit: sitemapSize,
    page: 1,
  })();

  return Array.from({ length: posts.totalPages }, (_, i) => ({ id: i + 1 }));
}

export default async function sitemap({ id: page }: SitemapProps): Promise<MetadataRoute.Sitemap> {
  const baseURL = getClientSideURL();

  const posts = await getPosts({
    limit: sitemapSize,
    page,
  })();
  return posts.docs.map((post) => {
    const images: Media[] = [];
    if (post.featuredImage && typeof post.featuredImage === 'object') {
      images.push(post.featuredImage);
    }

    return {
      images: images
        .map((image) =>
          typeof image === 'object' && typeof image.url === 'string' ? image.url : '',
        )
        .filter((url): url is string => !!url),
      lastModified: new Date(post.publishedAt),
      priority: 0.3,
      url: `${baseURL}/blogs/${post.slug}`,
    };
  });
}
