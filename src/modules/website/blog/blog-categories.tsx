'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Skeleton from '@mui/material/Skeleton';
import Link from 'next/link';
import { useRouter } from '@bprogress/next/app';

type Category = {
  id: string;
  name: string;
  slug: string;
};

export type BlogCategoriesProps = {
  categories: Category[];
  currentSlug?: string;
  isLoading?: boolean;
  postType?: string;
};

export function BlogCategories({
  categories,
  currentSlug,
  isLoading,
  postType,
}: BlogCategoriesProps) {
  const router = useRouter();

  if (isLoading) {
    return (
      <React.Fragment>
        <Typography
          component="h2"
          id="blog-categories-heading"
          sx={{ fontWeight: 500, mb: 1 }}
          variant="h6"
        >
          Categories
        </Typography>
        <Stack
          aria-busy="true"
          aria-label="Loading categories"
          direction="row"
          flexWrap="wrap"
          gap={0.5}
          sx={{ mb: 2 }}
        >
          {[...Array(5)].map((_, i) => (
            <Skeleton aria-hidden="true" height={30} key={i} variant="rectangular" width={80} />
          ))}
        </Stack>
      </React.Fragment>
    );
  }

  if (categories.length === 0) {
    return null;
  }

  return (
    <React.Fragment>
      <Typography
        component="h2"
        id="blog-categories-heading"
        sx={{ fontWeight: 500, mb: 1 }}
        variant="h6"
      >
        Categories
      </Typography>
      <nav
        aria-labelledby="blog-categories-heading"
        itemType="https://schema.org/SiteNavigationElement"
        itemScope
      >
        <Stack direction="row" flexWrap="wrap" gap={0.5}>
          {categories.map((cat) => {
            const isActive = postType === 'category' && currentSlug === cat.slug;
            return (
              <Chip
                key={cat.id}
                label={cat.name}
                size="small"
                variant="outlined"
                clickable
                {...(isActive
                  ? {
                      'aria-label': `View all posts (currently viewing ${cat.name})`,
                      color: 'tertiary',
                      onDelete() {
                        router.push('/blog');
                      },
                      role: 'button',
                      tabIndex: 0,
                    }
                  : {
                      'aria-label': `View posts in ${cat.name} category`,
                      color: 'default',
                      component: Link,
                      href: `/blog/category/${cat.slug}`,
                      itemProp: 'url',
                      prefetch: false,
                      role: 'link',
                      tabIndex: 0,
                    })}
                itemProp="name"
                itemType="https://schema.org/Thing"
                itemScope
              />
            );
          })}
        </Stack>
      </nav>
    </React.Fragment>
  );
}
