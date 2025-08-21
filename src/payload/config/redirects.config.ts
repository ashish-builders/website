import type { redirectsPlugin } from '@payloadcms/plugin-redirects';
import Posts from '@/payload/collections/Posts';
import PostTags from '@/payload/collections/PostTags';
import PostCategories from '@/payload/collections/PostCategories';

export default function redirectsPluginConfig(): Parameters<typeof redirectsPlugin>[0] {
  return {
    collections: [Posts.slug, PostTags.slug, PostCategories.slug],
    overrides: {
      admin: {
        group: 'Other',
      },
    },
  };
}
