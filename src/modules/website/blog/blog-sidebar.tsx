'use client';

import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useSearch } from '@/hooks/utils/use-search';
import Box from '@mui/material/Box';
import { useParams } from 'next/navigation';
import { getSlugDetails } from './utils';
import { BlogCategories, type BlogCategoriesProps } from './blog-categories';
import { BlogLatestPosts, type BlogLatestPostsProps } from './blog-latest-posts';

export type BlogSidebarProps = {
  categories: BlogCategoriesProps['categories'];
  posts: BlogLatestPostsProps['posts'];
};

export function BlogSidebar(props: BlogSidebarProps) {
  const { categories, posts } = props;

  // ─── State ───────────────────────────────────────────────────────────
  const params = useParams<{ slug: string[] }>();
  const { post, postType } = React.useMemo(() => getSlugDetails(params.slug), [params.slug]);

  const search = useSearch({
    debounceMs: 300,
    enableNuqs: true,
    shallow: false,
  });

  return (
    <Box
      aria-label="Blog sidebar"
      component="aside"
      itemType="https://schema.org/WPSideBar"
      sx={{ maxWidth: 340, px: 0, width: '100%' }}
      itemScope
    >
      <Box
        sx={{
          p: 2.5,
          pt: 0,
        }}
      >
        <TextField
          onChange={(event) => {
            search.onChange(event.target.value);
          }}
          slotProps={{
            htmlInput: {
              'aria-label': 'Search blog posts',
              autoComplete: 'off',
            },
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            },
          }}
          color="tertiary"
          placeholder="Search posts..."
          size="small"
          sx={{ mb: 2 }}
          value={search.value}
          fullWidth
        />
        <BlogCategories categories={categories} currentSlug={post} postType={postType} />
      </Box>
      <Box
        sx={{
          p: 2.5,
        }}
      >
        <BlogLatestPosts posts={posts} />
      </Box>
    </Box>
  );
}
