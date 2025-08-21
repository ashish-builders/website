'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import ArticleIcon from '@mui/icons-material/Article';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import HomeIcon from '@mui/icons-material/Home';

type BlogNoArticlesProps = {
  categoryName?: string;
  searchQuery?: string;
  tagName?: string;
};

export function BlogNoArticles({ categoryName, searchQuery, tagName }: BlogNoArticlesProps) {
  const isSearch = Boolean(searchQuery);
  const isCategory = Boolean(categoryName);
  const isTag = Boolean(tagName);

  let title: string;
  let description: string;
  let icon: React.ReactNode;

  if (isSearch) {
    title = 'No articles found';
    description = `We couldn't find any articles matching "${searchQuery}". Try searching with different keywords or browse all articles.`;
    icon = <SearchOffIcon sx={{ color: 'text.secondary', fontSize: 48 }} />;
  } else if (isCategory) {
    title = 'No articles in this category';
    description = `There are no published articles in the "${categoryName}" category yet. Check back later or explore other categories.`;
    icon = <ArticleIcon sx={{ color: 'text.secondary', fontSize: 48 }} />;
  } else if (isTag) {
    title = 'No articles with this tag';
    description = `There are no published articles tagged with "${tagName}" yet. Check back later or explore other tags.`;
    icon = <ArticleIcon sx={{ color: 'text.secondary', fontSize: 48 }} />;
  } else {
    title = 'No articles found';
    description =
      'There are no published articles available at the moment. Check back later for new content.';
    icon = <ArticleIcon sx={{ color: 'text.secondary', fontSize: 48 }} />;
  }

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        px: 2,
        py: 8,
        textAlign: 'center',
      }}
      aria-label="No articles found"
      component="section"
      itemType="https://schema.org/CollectionPage"
      role="region"
      itemScope
    >
      <Stack alignItems="center" maxWidth={400} spacing={3}>
        <span aria-hidden="true">{icon}</span>

        <Box>
          <Typography
            sx={{
              color: 'text.primary',
              fontWeight: 600,
              mb: 1,
            }}
            component="h1"
            id="no-articles-title"
            itemProp="name"
            variant="h5"
          >
            {title}
          </Typography>

          <Typography
            sx={{
              lineHeight: 1.6,
            }}
            color="text.secondary"
            id="no-articles-desc"
            itemProp="description"
            variant="body1"
          >
            {description}
          </Typography>
        </Box>

        <nav
          aria-label="Blog navigation"
          itemType="https://schema.org/SiteNavigationElement"
          itemScope
        >
          <Stack direction="row" flexWrap="wrap" justifyContent="center" role="list" spacing={2}>
            <Button
              aria-label="View all blog articles"
              color="tertiary"
              component={Link}
              href="/blog"
              itemProp="url"
              prefetch={false}
              role="listitem"
              startIcon={<ArticleIcon />}
              variant="contained"
            >
              All Articles
            </Button>

            <Button
              aria-label="Go to homepage"
              color="tertiary"
              component={Link}
              href="/"
              itemProp="url"
              prefetch={false}
              role="listitem"
              startIcon={<HomeIcon />}
              variant="outlined"
            >
              Home
            </Button>
          </Stack>
        </nav>
      </Stack>
    </Box>
  );
}
