import { BasePayload } from 'payload';

export type GetCategoriesProps = {
  limit?: number;
  page?: number;
  payload: BasePayload;
};

export async function getCategories({ limit, page, payload }: GetCategoriesProps) {
  const result = await payload.find({
    collection: 'post-categories',
    limit,
    overrideAccess: false,
    page,
    pagination: false,
    populate: {
      'post-categories': {
        meta: true,
      },
    },
    select: {
      description: true,
      meta: true,
      name: true,
      slug: true,
    },
    showHiddenFields: true,
  });
  return result.docs;
}
