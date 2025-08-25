import { type BasePayload, type PayloadRequest, type Where } from 'payload';

export type GetPostProps = {
  categories?: string[];
  limit: number;
  page: number;
  payload: BasePayload;
  req?: Partial<PayloadRequest>;
  search?: string;
  tags?: string[];
};

export async function getPosts(props: GetPostProps) {
  const { categories, limit, page, payload, req, search, tags } = props;

  // Build where clause
  const where: Where = {};
  if (categories && categories.length > 0) {
    // Search categories by slug
    where['category.slug'] = { in: categories };
  }
  if (tags && tags.length > 0) {
    // Search tags by slug
    where['tags.slug'] = { in: tags };
  }
  if (search && search.trim().length > 0) {
    // Add a text search for title or excerpt fields (case-insensitive, partial match)
    where.or = [{ title: { like: search } }, { excerpt: { like: search } }];
  }

  const response = await payload.find({
    collection: 'posts',
    limit,
    overrideAccess: false,
    page,
    populate: {
      'post-categories': {
        meta: true,
        name: true,
        slug: true,
      },
      'post-tags': { meta: true, name: true, slug: true },
      users: {
        displayName: true,
        email: true,
        firstName: true,
        lastName: true,
        middleName: true,
      },
    },
    req,
    select: {
      author: true,
      category: true,
      createdAt: true,
      excerpt: true,
      featuredImage: true,
      publishedAt: true,
      readTime: true,
      slug: true,
      status: true,
      tags: true,
      title: true,
      updatedAt: true,
    },
    showHiddenFields: true,
    sort: '-publishedAt',
    where,
  });

  return response;
}

export type GetPostsForSitemapProps = {
  limit?: number;
  page?: number;
  payload: BasePayload;
};

export async function getPostsForSitemap(props: GetPostsForSitemapProps) {
  const { limit, page, payload } = props;

  return payload.find({
    collection: 'posts',
    limit,
    overrideAccess: false,
    page,
    pagination: true,
    populate: {
      posts: {
        featuredImage: true,
      },
    },
    select: {
      featuredImage: true,
      publishedAt: true,
      slug: true,
    },
    showHiddenFields: true,
  });
}
