import type { CollectionConfig } from 'payload'
import { admin, anyone, editor } from './helpers/access'

const Users: CollectionConfig = {
  access: {
    admin: editor,
    create: admin,
    delete: admin,
    read: anyone,
    update: editor,
  },
  admin: {
    group: 'Settings',
    useAsTitle: 'displayName',
  },
  auth: true,
  fields: [
    // Email added by default
    {
      label: 'First Name',
      name: 'firstName',
      required: true,
      type: 'text',
    },
    {
      label: 'Middle Name',
      name: 'middleName',
      required: false,
      type: 'text',
    },
    {
      label: 'Last Name',
      name: 'lastName',
      required: false,
      type: 'text',
    },
    {
      admin: {
        hidden: true,
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            const names = [data?.firstName, data?.middleName, data?.lastName]
              .filter(Boolean)
              .join(' ')
            return (names && names.trim()) || data?.email || ''
          },
        ],
      },
      name: 'displayName',
      required: false,
      type: 'text',
    },
    {
      access: {
        read: ({ req }) => !!req.user,
        update: ({ req }) => req.user?.role === 'admin',
      },
      defaultValue: 'editor',
      label: 'Role',
      name: 'role',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Editor',
          value: 'editor',
        },
      ],
      required: true,
      type: 'select',
    },
    // Add more fields as needed
  ],
  slug: 'users',
}

export default Users
