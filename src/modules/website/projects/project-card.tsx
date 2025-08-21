'use client';

import * as React from 'react';
import { Image } from '@/components/image/image';
import { LinkNoPrefetch } from '@/components/link/link';
import { Box, Button, Typography } from '@mui/material';
import { HoverScale } from '@/components/motion/hover-scale/hover-scale';

type ProjectCardProps = {
  address: string;
  blurDataUrl?: null | string;
  district: string;
  featuredImage?: null | string;
  name: string;
  pincode: string;
  slug: string;
  state: string;
};

export function ProjectCard(props: ProjectCardProps) {
  const { address, blurDataUrl, district, featuredImage, name, pincode, slug, state } = props;
  return (
    <Box
      aria-label={`Project card for ${name}`}
      component="article"
      itemType="https://schema.org/RealEstateProject"
      itemScope
    >
      {featuredImage ? (
        <HoverScale
          sx={{
            height: 240,
          }}
        >
          <Image
            alt={name}
            blurDataURL={blurDataUrl || undefined}
            itemProp="image"
            loading="lazy"
            placeholder={blurDataUrl ? 'blur' : 'empty'}
            priority={false}
            quality={100}
            src={featuredImage}
            sx={{ objectFit: 'cover' }}
            fill
          />
        </HoverScale>
      ) : null}
      <Typography itemProp="name" sx={{ mb: 0.5, mt: 1.5 }} variant="h6">
        {name}
      </Typography>
      <Typography
        color="text.secondary"
        fontWeight={400}
        itemProp="address"
        sx={{ mb: 2 }}
        variant="body1"
      >
        {`${[address, district, state].filter(Boolean).join(', ')} - ${pincode}`}
      </Typography>
      <Button
        aria-label={`View details for ${name}`}
        color="tertiary"
        href={`/projects/${slug}`}
        itemProp="url"
        LinkComponent={LinkNoPrefetch}
        sx={{ borderRadius: 0 }}
        variant="outlined"
      >
        Know More
      </Button>
    </Box>
  );
}
