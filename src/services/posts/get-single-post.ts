import { type BasePayload, type PayloadRequest } from 'payload';

export type GetSinglePostProps = {
  content?: boolean;
  id?: string;
  page?: number;
  payload: BasePayload;
  req?: Partial<PayloadRequest>;
  slug?: string;
};
export async function getSinglePost(props: GetSinglePostProps) {
  const { content = true, id, page, payload, req, slug } = props;
  if (!slug && !id && !page) {
    throw new Error('Either slug, id or page must be provided');
  }
  const posts = await payload.find({
    collection: 'posts',
    limit: 1,
    overrideAccess: false,
    page,
    pagination: false,
    populate: {
      posts: {
        author: true,
        category: true,
        meta: true,
        tags: true,
      },
    },
    req,
    select: {
      author: true,
      category: true,
      content: content || undefined,
      createdAt: true,
      excerpt: true,
      featuredImage: true,
      meta: true,
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
    where: slug ? { slug: { equals: slug } } : { id: { equals: id } },
  });

  return posts.docs[0];
}

export type GetSinglePostSeoProps = {
  id?: string;
  payload: BasePayload;
  req?: Partial<PayloadRequest>;
  slug?: string;
};

export async function getSinglePostSeo(props: GetSinglePostSeoProps) {
  const { id, payload, req, slug } = props;
  if (!slug && !id) {
    throw new Error('Either slug, id or page must be provided');
  }
  const posts = await payload.find({
    collection: 'posts',
    limit: 1,
    overrideAccess: false,
    pagination: false,
    populate: {
      posts: {
        author: true,
        category: true,
        featuredImage: true,
        meta: true,
        tags: true,
      },
    },
    req,
    select: {
      author: true,
      category: true,
      createdAt: true,
      excerpt: true,
      featuredImage: true,
      meta: true,
      publishedAt: true,
      readTime: true,
      slug: true,
      tags: true,
      title: true,
      updatedAt: true,
    },
    showHiddenFields: true,
    where: slug ? { slug: { equals: slug } } : { id: { equals: id } },
  });

  return posts.docs[0];
}
