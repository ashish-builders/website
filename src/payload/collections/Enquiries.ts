import type { CollectionConfig } from 'payload';
import { admin, anyone, editor } from './helpers/access';

const Enquiries: CollectionConfig = {
  access: {
    admin: editor,
    create: anyone,
    delete: admin,
    read: editor,
    update: editor,
  },
  admin: {
    defaultColumns: ['name', 'status', 'createdAt', 'updatedAt'],
    group: 'Form',
    listSearchableFields: ['name', 'email', 'phone', 'status'],
    useAsTitle: 'name',
  },
  fields: [
    {
      label: 'Full Name',
      name: 'name',
      required: true,
      type: 'text',
    },
    {
      label: 'Email Address',
      name: 'email',
      required: true,
      type: 'email',
    },
    {
      label: 'Phone Number',
      name: 'phone',
      required: true,
      type: 'text',
    },
    {
      label: 'Property Type',
      name: 'propertyType',
      options: [
        { label: '2BHK Villa', value: '2bhk-villa' },
        { label: '3BHK Villa', value: '3bhk-villa' },
        { label: '3BHK Duplex Villa', value: '3bhk-duplex-villa' },
        { label: '4BHK Duplex Villa', value: '4bhk-duplex-villa' },
      ],
      required: true,
      type: 'select',
    },
    {
      label: 'When to Buy',
      name: 'whenToBuy',
      options: [
        {
          label: 'Immediately',
          value: 'immediately',
        },
        {
          label: 'More than 6 months',
          value: 'more-than-6-months',
        },
        {
          label: 'Within 3 months',
          value: 'within-3-months',
        },
        {
          label: 'Within 3-6 months',
          value: 'within-3-6-months',
        },
      ],
      required: false,
      type: 'select',
    },

    {
      access: {
        create: editor,
        read: editor,
        update: editor,
      },
      admin: {
        condition: () => true,
        position: 'sidebar',
        readOnly: false,
      },
      defaultValue: () => 'new',
      label: 'Status',
      name: 'status',
      options: [
        { label: 'New', value: 'new' },
        { label: 'In Review', value: 'in_review' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Closed', value: 'closed' },
      ],
      required: false,
      type: 'select',
    },
    {
      admin: {
        condition: () => true,
        position: 'sidebar',
        readOnly: false,
      },
      label: 'Notes',
      name: 'notes',
      required: false,
      type: 'textarea',
    },
    // UTM fields
    {
      admin: {
        readOnly: true,
      },
      label: 'UTM Source',
      name: 'utm_source',
      required: false,
      type: 'text',
    },
    {
      admin: {
        readOnly: true,
      },
      label: 'UTM Medium',
      name: 'utm_medium',
      required: false,
      type: 'text',
    },
    {
      admin: {
        readOnly: true,
      },
      label: 'UTM Campaign',
      name: 'utm_campaign',
      required: false,
      type: 'text',
    },
    {
      admin: {
        readOnly: true,
      },
      label: 'UTM Term',
      name: 'utm_term',
      required: false,
      type: 'text',
    },
    {
      admin: {
        readOnly: true,
      },
      label: 'UTM Content',
      name: 'utm_content',
      required: false,
      type: 'text',
    },
  ],
  labels: {
    plural: 'Enquiry',
    singular: 'Enquiries',
  },
  slug: 'enquiries',
  timestamps: true,
};

export default Enquiries;
