import { getArray } from '@/lib/array';
import { PostType } from './types';

export const getSlugDetails = (slugs?: unknown[]) => {
  const slug = getArray<string>(slugs);
  const slugLength = slug.length;

  // No slug: show blog listing
  if (!slugLength) {
    return {
      is404: false,
      isSinglePost: false,
      page: 1,
      post: undefined,
      postType: PostType.BLOG,
    };
  }

  // /page/[n]
  if (slug[0] === 'page' && slugLength === 2 && !Number.isNaN(Number(slug[1]))) {
    return {
      is404: false,
      isSinglePost: false,
      page: Number(slug[1]),
      post: undefined,
      postType: PostType.BLOG,
    };
  }

  // /category/[category-slug]/page/[n]
  if (
    slug[0] === PostType.CATEGORY &&
    slugLength === 4 &&
    slug[2] === 'page' &&
    !Number.isNaN(Number(slug[3]))
  ) {
    return {
      is404: false,
      isSinglePost: false,
      page: Number(slug[3]),
      post: slug[1],
      postType: PostType.CATEGORY,
    };
  }

  // /category/[category-slug]
  if (slug[0] === PostType.CATEGORY && slugLength === 2) {
    return {
      is404: false,
      isSinglePost: false,
      page: 1,
      post: slug[1],
      postType: PostType.CATEGORY,
    };
  }

  // /tag/[tag-slug]/page/[n]
  if (
    slug[0] === PostType.TAG &&
    slugLength === 4 &&
    slug[2] === 'page' &&
    !Number.isNaN(Number(slug[3]))
  ) {
    return {
      is404: false,
      isSinglePost: false,
      page: Number(slug[3]),
      post: slug[1],
      postType: PostType.TAG,
    };
  }

  // /tag/[tag-slug]
  if (slug[0] === PostType.TAG && slugLength === 2) {
    return {
      is404: false,
      isSinglePost: false,
      page: 1,
      post: slug[1],
      postType: PostType.TAG,
    };
  }

  // /[post-slug] (single post)
  if (slugLength === 1) {
    return {
      is404: false,
      isSinglePost: true,
      page: 1,
      post: slug[0],
      postType: PostType.BLOG,
    };
  }

  return {
    is404: true,
    isSinglePost: false,
    page: 1,
    post: undefined,
    postType: PostType.BLOG,
  };
};

export function getPostReadTime(text: string): number {
  if (!text) {
    return 0;
  }
  const words = text.split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return minutes;
}
