import Posts from '@/payload/collections/Posts';
import { payloadAiPlugin } from '@ai-stack/payloadcms';

export default function aiPluginConfig(): Parameters<typeof payloadAiPlugin>[0] {
  return {
    collections: {
      [Posts.slug]: true,
    },
    debugging: false,
  };
}
