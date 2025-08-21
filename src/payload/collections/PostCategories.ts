import { slug } from '@/payload/fields/slug/config'
import type { CollectionConfig } from 'payload'
import { admin, anyone, editor } from './helpers/access'

const PostCategories: CollectionConfig = {
  access: {
    create: editor,
    delete: admin,
    read: anyone,
    update: editor,
  },
  admin: {
    defaultColumns: ['name', 'slug'],
    group: 'Blog',
    useAsTitle: 'name',
  },
  fields: [
    {
      label: 'Name',
      name: 'name',
      required: true,
      type: 'text',
    },
    slug(
      { trackingField: 'name' },
      {
        required: true,
      },
    ),
    {
      label: 'Description',
      name: 'description',
      type: 'textarea',
    },
  ],
  labels: {
    plural: 'Categories',
    singular: 'Category',
  },
  slug: 'post-categories',
}

export default PostCategories
