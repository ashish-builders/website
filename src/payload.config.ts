import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import { seoPlugin } from '@payloadcms/plugin-seo';

import { cloudStoragePlugin } from '@payloadcms/plugin-cloud-storage';
import { payloadAiPlugin } from '@ai-stack/payloadcms';
import { getServerSideURL } from '@/lib/get-url';
import Users from '@/payload/collections/Users';
import Media from '@/payload/collections/Media';
import Posts from '@/payload/collections/Posts';
import PostCategories from '@/payload/collections/PostCategories';
import PostTags from '@/payload/collections/PostTags';
import cloudStorageConfig from '@/payload/config/cloudinary.config';
import seoPluginConfig from '@/payload/config/seo.config';
import { siteName } from '@/constants/site-info';
import aiPluginConfig from '@/payload/config/ai.config';
import Enquiries from '@/payload/collections/Enquiries';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    components: {
      // Uncomment and adjust the following lines if you have custom graphics
      beforeNavLinks: ['@/payload/graphics/NavLogo'],
      graphics: {
        Icon: '@/payload/graphics/Icon',
        Logo: '@/payload/graphics/Logo',
      },
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      description: `Admin panel for managing content, media, and site settings for ${siteName}.`,
      icons: '/favicon.ico',
      openGraph: {
        description: `Admin panel for managing content, media, and site settings for ${siteName}.`,
        siteName,
        title: `Admin Panel | ${siteName}`,
      },
      robots: {
        follow: false,
        index: false,
        indexifembedded: false,
        noarchive: true,
        noimageindex: true,
        nosnippet: true,
        notranslate: true,
      },
      titleSuffix: `| ${siteName}`,
      twitter: {
        description: `Admin panel for managing content, media, and site settings for ${siteName}.`,
        title: `Admin Panel | ${siteName}`,
      },
    },
    user: Users.slug,
  },
  collections: [Posts, PostCategories, PostTags, Enquiries, Media, Users],
  cors: [getServerSideURL()].filter(Boolean),
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  editor: lexicalEditor(),
  plugins: [
    payloadCloudPlugin(),
    cloudStoragePlugin(cloudStorageConfig()),
    payloadAiPlugin(aiPluginConfig()),
    seoPlugin(seoPluginConfig()),
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
});
