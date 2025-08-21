import type { searchPlugin } from '@payloadcms/plugin-search';
import PostCategories from '@/payload/collections/PostCategories';
import PostTags from '@/payload/collections/PostTags';
import Posts from '@/payload/collections/Posts';

export default function searchPluginConfig(): Parameters<typeof searchPlugin>[0] {
  return {
    beforeSync({ originalDoc, searchDoc }) {
      const collection = searchDoc.doc.relationTo;
      if (collection === PostCategories.slug) {
        return {
          ...searchDoc,
          description: originalDoc.description,
          title: originalDoc.name,
        };
      }
      if (collection === PostTags.slug) {
        return {
          ...searchDoc,
          description: originalDoc.description,
          title: originalDoc.name,
        };
      }
      return searchDoc;
    },
    collections: [Posts.slug, PostTags.slug, PostCategories.slug],
    defaultPriorities: {
      [PostCategories.slug]: 5,
      [Posts.slug]: 10,
      [PostTags.slug]: 5,
    },
    deleteDrafts: true,
    searchOverrides: {
      admin: {
        group: 'Other',
      },
    },
  };
}
