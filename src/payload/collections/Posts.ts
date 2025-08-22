import { slug } from '@/payload/fields/slug/config';
import readingTime from 'reading-time';
import { convertLexicalToPlaintext } from '@payloadcms/richtext-lexical/plaintext';
import type { CollectionConfig } from 'payload';
import { lexicalEditor, EXPERIMENTAL_TableFeature } from '@payloadcms/richtext-lexical';
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import { admin, anyone, editor } from './helpers/access';

type GetPlainTextProps = {
  data: SerializedEditorState;
};

function getPlanText(props: GetPlainTextProps): string {
  return props?.data ? convertLexicalToPlaintext({ data: props.data }) : '';
}

const Posts: CollectionConfig = {
  access: {
    create: editor,
    delete: admin,
    read: anyone,
    update: editor,
  },
  admin: {
    defaultColumns: ['title', 'author', 'publishedAt', 'category', 'tags'],
    group: 'Blog',
    useAsTitle: 'title',
  },
  defaultSort: ['-publishedAt'],
  fields: [
    {
      label: 'Title',
      name: 'title',
      required: true,
      type: 'text',
    },
    slug(
      { trackingField: 'title' },
      {
        required: true,
        validate: (value: string) => {
          const reserved = ['page', 'post', 'categories', 'tags', 'users', 'archives'];
          if (reserved.includes(value)) {
            return 'This slug is reserved and cannot be used.';
          }
          return true;
        },
      },
    ),
    {
      label: 'Category',
      name: 'category',
      relationTo: 'post-categories',
      required: true,
      type: 'relationship',
    },
    {
      hasMany: true,
      label: 'Tags',
      name: 'tags',
      relationTo: 'post-tags',
      type: 'relationship',
    },
    {
      label: 'Featured Image',
      name: 'featuredImage',
      relationTo: 'media',
      type: 'upload',
    },
    {
      editor: lexicalEditor({
        features({ defaultFeatures }) {
          return [...defaultFeatures, EXPERIMENTAL_TableFeature()];
        },
      }),
      label: 'Content',
      name: 'content',
      required: true,
      type: 'richText',
    },
    {
      admin: { hidden: true },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            const plainText = getPlanText({ data: data?.content });
            return readingTime(plainText).text;
          },
        ],
      },
      label: 'Read Time',
      name: 'readTime',
      required: false,
      type: 'text',
    },
    {
      hooks: {
        beforeValidate: [
          ({ data }) => {
            return data?.excerpt || getPlanText({ data: data?.content }).substring(0, 180);
          },
        ],
      },
      label: 'Excerpt',
      name: 'excerpt',
      type: 'textarea',
    },
    {
      admin: {
        position: 'sidebar',
      },
      defaultValue: ({ req }) => req.user || null,
      label: 'Author',
      name: 'author',
      relationTo: 'users',
      required: true,
      type: 'relationship',
    },
    {
      admin: {
        date: {
          displayFormat: 'do MMMM yyyy, h:mm a',
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      defaultValue: () => new Date().toISOString(),
      label: 'Published At',
      name: 'publishedAt',
      required: true,
      type: 'date',
    },
  ],
  labels: {
    plural: 'Posts',
    singular: 'Post',
  },
  slug: 'posts',
  timestamps: true,
  versions: {
    drafts: {
      autosave: false,
      schedulePublish: true,
      validate: true,
    },
    maxPerDoc: 5,
  },
};

export default Posts;
