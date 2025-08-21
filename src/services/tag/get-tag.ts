import { BasePayload } from 'payload'

export type GetTagProps = {
  id?: string
  payload: BasePayload
  slug?: string
}

export async function getTag({ id, payload, slug }: GetTagProps) {
  if (!slug && !id) {
    throw new Error('Either slug or id must be provided')
  }
  const result = await payload.find({
    collection: 'post-tags',
    limit: 1,
    overrideAccess: false,
    pagination: false,
    populate: {
      'post-tags': {
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

export type GetTagsForSitemapProps = {
  limit?: number
  page?: number
  payload: BasePayload
}

export async function getTagsForSitemap(props: GetTagsForSitemapProps) {
  const { limit, page, payload } = props

  return payload.find({
    collection: 'post-tags',
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
