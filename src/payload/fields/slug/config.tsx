import { merge } from 'es-toolkit'
import { Field } from 'payload'

export type Slug = (options?: { trackingField?: string }, overrides?: Partial<Field>) => Field

export const slug: Slug = ({ trackingField = 'title' } = {}, overrides = {}) =>
  merge<Field, Partial<Field>>(
    {
      admin: {
        components: {
          Field: {
            clientProps: {
              trackingField,
            },
            exportName: 'Slug',
            path: '@/payload/fields/slug/component',
          },
        },
        position: 'sidebar',
        readOnly: true,
      },
      name: 'slug',
      type: 'text',
      unique: true,
    },
    overrides,
  )
