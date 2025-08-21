import { BasePayload } from 'payload'

export type GetCategoryProps = {
  id?: string
  payload: BasePayload
  slug?: string
}

export async function getCategory({ id, payload, slug }: GetCategoryProps) {
  if (!slug && !id) {
    throw new Error('Either slug or id must be provided')
  }
  const result = await payload.find({
    collection: 'post-categories',
    limit: 1,
    overrideAccess: false,
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
    where: slug ? { slug: { equals: slug } } : { id: { equals: id } },
  })
  return result.docs[0] || null
}

export type GetCategoriesForSitemapProps = {
  limit?: number
  page?: number
  payload: BasePayload
}

export async function getCategoriesForSitemap(props: GetCategoriesForSitemapProps) {
  const { limit, page, payload } = props

  return payload.find({
    collection: 'post-categories',
    limit,
    overrideAccess: false,
    page,
    pagination: true,
    select: {
      createdAt: true,
      slug: true,
    },
    showHiddenFields: true,
  })
}
