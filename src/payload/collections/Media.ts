import type { CollectionConfig } from 'payload';
import { admin, anyone, editor } from './helpers/access';

const Media: CollectionConfig = {
  access: {
    admin: editor,
    create: editor,
    delete: admin,
    read: anyone,
    update: editor,
  },
  admin: {
    group: 'Media',
  },
  fields: [
    {
      name: 'alt',
      required: true,
      type: 'text',
    },
  ],
  slug: 'media',
  upload: true,
};

export default Media;
