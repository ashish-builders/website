import { getClientSideURL } from '@/lib/get-url';
import type { SEOPluginConfig } from '@payloadcms/plugin-seo/types';
import PostCategories from '@/payload/collections/PostCategories';
import PostTags from '@/payload/collections/PostTags';
import Posts from '@/payload/collections/Posts';
import { siteName } from '@/constants/site-info';

export default function seoPluginConfig(): SEOPluginConfig {
  return {
    collections: [Posts.slug, PostTags.slug, PostCategories.slug],
    generateDescription: ({ collectionSlug, doc }) => {
      if (collectionSlug === PostTags.slug || collectionSlug === PostCategories.slug) {
        return doc.description?.slice(0, 150) || '';
      }
      return doc.excerpt?.slice(0, 150) || '';
    },
    generateImage: ({ doc }) => doc?.featuredImage,
    generateTitle: ({ collectionSlug, doc }) => {
      if (collectionSlug === PostTags.slug || collectionSlug === PostCategories.slug) {
        return doc.name ? `${doc.name} | ${siteName}` : '';
      }
      return doc.title ? `${doc.title} | ${siteName}` : '';
    },
    generateURL: ({ collectionSlug, doc }) => {
      const baseURl = getClientSideURL();
      let slug: string | undefined = collectionSlug;
      if (collectionSlug === PostTags.slug) {
        slug = 'blogs/tag';
      } else if (collectionSlug === PostCategories.slug) {
        slug = 'blogs/category';
      } else if (collectionSlug === Posts.slug) {
        slug = 'blogs';
      }
      return [baseURl, slug, doc.slug].filter(Boolean).join('/');
    },
    uploadsCollection: 'media',
  };
}
