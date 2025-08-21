'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Skeleton from '@mui/material/Skeleton';
import Link from 'next/link';
import Image from 'next/image';

type Upload = {
  altText?: null | string;
  publicUrl: string;
  uploadType: string;
};

type Post = {
  id: string;
  slug: string;
  title: string;
  uploads?: Upload[];
};

export type BlogLatestPostsProps = {
  isLoading?: boolean;
  posts: Post[];
};

export function BlogLatestPosts({ isLoading, posts }: BlogLatestPostsProps) {
  if (isLoading) {
    return (
      <Box>
        <Typography
          component="h2"
          id="latest-posts-heading"
          sx={{ fontWeight: 500, mb: 1 }}
          variant="h6"
        >
          Latest Posts
        </Typography>
        <List aria-busy="true" aria-label="Loading latest posts" sx={{ pb: 0 }} dense>
          {[...Array(4)].map((_, i) => (
            <ListItem key={i} disablePadding>
              <ListItemButton
                sx={{
                  borderRadius: 'calc(var(--mui-shape-borderRadius) * 4)',
                  p: 1,
                }}
                aria-hidden="true"
                tabIndex={-1}
                disableGutters
              >
                <ListItemIcon sx={{ minWidth: 68 }}>
                  <Skeleton aria-hidden="true" height={40} variant="rectangular" width={56} />
                </ListItemIcon>
                <ListItemText
                  primary={<Skeleton aria-hidden="true" height={24} variant="text" width={120} />}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <Box>
      <Typography component="h2" id="latest-posts-heading" sx={{ fontWeight: 500 }} variant="h6">
        Latest Posts
      </Typography>
      <nav
        aria-labelledby="latest-posts-heading"
        itemType="https://schema.org/CollectionPage"
        itemScope
      >
        <List sx={{ pb: 0 }} dense>
          {posts.map((post) => {
            const image = post.uploads?.find?.((upload) => upload.uploadType === 'FEATURED_IMAGE');
            return (
              <ListItem
                itemProp="hasPart"
                itemType="https://schema.org/BlogPosting"
                key={post.id}
                disablePadding
                itemScope
              >
                <ListItemButton
                  sx={{
                    borderRadius: 'var(--mui-shape-borderRadius)',
                    p: 1,
                  }}
                  aria-label={`Read post: ${post.title}`}
                  component={Link}
                  href={`/blog/${post.slug}`}
                  itemProp="url"
                  prefetch={false}
                  disableGutters
                >
                  {image?.publicUrl && (
                    <ListItemIcon
                      sx={{
                        minWidth: 68,
                      }}
                    >
                      <Image
                        style={{
                          display: 'block',
                          height: 56,
                          objectFit: 'cover',
                          width: 56,
                        }}
                        alt={image.altText || `Featured image for ${post.title}`}
                        height={120}
                        itemProp="image"
                        quality={100}
                        src={image.publicUrl}
                        width={120}
                      />
                    </ListItemIcon>
                  )}
                  <ListItemText
                    slotProps={{
                      primary: {
                        itemProp: 'headline',
                        sx: {
                          display: '-webkit-box !important',
                          fontSize: 15,
                          fontWeight: 500,
                          lineHeight: 1.3,
                          mb: 0.5,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 2,
                        },
                      },
                    }}
                    primary={post.title}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Box>
  );
}
