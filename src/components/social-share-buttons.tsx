import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Facebook } from '@/components/icons/facebook';
import { TwitterX } from '@/components/icons/twitter-x';
import { Instagram } from '@/components/icons/instagram';
import { Linkedin } from '@/components/icons/linkedin';
import { Link } from '@/components/link/link';
import { usePathname } from 'next/navigation';
import { Bluesky } from '@/components/icons/bluesky';
import * as React from 'react';
import { getClientSideURL } from '@/lib/get-url';

type SocialShareButtonsProps = {
  title: string;
};

export function SocialShareButtons({ title }: SocialShareButtonsProps) {
  const pathname = usePathname();
  const fullUrl = getClientSideURL() + pathname;
  return (
    <Box
      alignItems="center"
      aria-label="Share this post"
      display="flex"
      flexWrap="wrap"
      gap={1}
      itemType="https://schema.org/ShareAction"
      justifyContent="flex-start"
      role="region"
      itemScope
    >
      <Typography component="span" sx={{ mr: 1 }} variant="subtitle2">
        Share:
      </Typography>
      <IconButton
        aria-label="Share on Facebook"
        color="inherit"
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`}
        itemProp="url"
        LinkComponent={Link}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Facebook aria-hidden="true" height={20} width={20} brandColor />
      </IconButton>
      <IconButton
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
          fullUrl,
        )}&text=${encodeURIComponent(title)}`}
        aria-label="Share on X (Twitter)"
        color="inherit"
        itemProp="url"
        LinkComponent={Link}
        rel="noopener noreferrer"
        target="_blank"
      >
        <TwitterX aria-hidden="true" height={20} width={20} brandColor />
      </IconButton>
      <IconButton
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
          fullUrl,
        )}&title=${encodeURIComponent(title)}`}
        aria-label="Share on LinkedIn"
        color="inherit"
        itemProp="url"
        LinkComponent={Link}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Linkedin aria-hidden="true" height={20} width={20} brandColor />
      </IconButton>
      <IconButton
        aria-label="Share on Instagram"
        color="inherit"
        href={`https://www.instagram.com/?url=${encodeURIComponent(fullUrl)}`}
        itemProp="url"
        LinkComponent={Link}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Instagram aria-hidden="true" height={20} width={20} brandColor />
      </IconButton>
      <IconButton
        aria-label="Share on Bluesky"
        color="inherit"
        href={`https://bsky.app/intent/compose?text=${encodeURIComponent(`${title}\n${fullUrl}`)}`}
        itemProp="url"
        LinkComponent={Link}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Bluesky aria-hidden="true" height={20} width={20} brandColor />
      </IconButton>
    </Box>
  );
}
