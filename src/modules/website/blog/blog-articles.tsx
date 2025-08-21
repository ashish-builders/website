'use client';

import { notFound, useParams } from 'next/navigation';
import { usePagination } from '@/hooks/utils/use-pagination';
import { useSearch } from '@/hooks/utils/use-search';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Image } from '@/components/image/image';
import { Breadcrumbs, type BreadcrumbItem } from '@/components/breadcrumbs/breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import jump from 'jump.js';
import { HoverScale } from '@/components/motion/hover-scale/hover-scale';
import { motion } from 'motion/react';
import { PostMeta } from './post-meta';
import { PostType } from './types';
import { getSlugDetails } from './utils';
import { BlogArticlesLoading } from './blog-articles-loading';
import { BlogNoArticles } from './blog-no-articles';

export type BlogPost = {
  category?:
    | null
    | string
    | undefined
    | {
        name: string;
        slug: string;
      };
  excerpt?: null | string;
  featuredImage?: null | string | { alt?: null | string; url?: null | string };
  id: string;
  publishedAt: string;
  slug: string;
  tags?: Array<null | string | undefined | { name?: null | string }> | null | string;
  title: string;
};

export type BlogArticlesProps = {
  isLoading?: boolean;
  posts?: BlogPost[];
};

export function BlogArticles(props: BlogArticlesProps) {
  const { isLoading = false, posts = [] } = props;

  // Ref for the first post card
  const firstPostRef = React.useRef<null | React.ComponentRef<'article'>>(null);

  // ─── State ───────────────────────────────────────────────────────────
  const params = useParams<{ slug: string[] }>();
  const { is404, isSinglePost, post, postType } = React.useMemo(
    () => getSlugDetails(params.slug),
    [params.slug],
  );
  const pagination = usePagination({
    defaultPageSize: 10,
    enableNuqs: true,
  });
  const search = useSearch({
    enableNuqs: true,
  });

  // ─── Calculation ────────────────────────────────────────────────────────────
  const totalPages = posts.length > 0 ? Math.ceil(posts.length / pagination.pageSize) : 1;

  const breadcrumbItems = React.useMemo<BreadcrumbItem[]>(() => {
    const items: BreadcrumbItem[] = [
      {
        href: '/blog',
        isLink: true,
        key: 'blog',
        label: (
          <Stack alignItems="center" component="span" direction="row" gap={0.5}>
            <HomeIcon sx={{ fontSize: 18, verticalAlign: 'middle' }} />
            Blog
          </Stack>
        ),
      },
    ];
    if (postType === PostType.CATEGORY && typeof post === 'string') {
      const category = posts[0]?.category;
      const label = typeof category !== 'string' ? category?.name : null;
      if (label) {
        items.push({
          isLink: false,
          key: 'category',
          label: (
            <Stack alignItems="center" component="span" direction="row" gap={0.5}>
              <FolderOpenIcon sx={{ fontSize: 18, verticalAlign: 'middle' }} />
              {label}
            </Stack>
          ),
        });
      }
    } else if (postType === PostType.TAG && typeof post === 'string') {
      const tag = posts[0]?.tags?.[0];
      const label = typeof tag !== 'string' ? tag?.name : null;
      if (label) {
        items.push({
          isLink: false,
          key: 'tag',
          label: (
            <Stack alignItems="center" component="span" direction="row" gap={0.5}>
              <LocalOfferIcon sx={{ fontSize: 18, verticalAlign: 'middle' }} />
              {label}
            </Stack>
          ),
        });
      }
    } else if (postType === PostType.BLOG && typeof post === 'string' && post) {
      const label = posts[0].title;
      if (label) {
        items.push({
          isLink: false,
          key: 'post',
          label: (
            <Stack alignItems="center" component="span" direction="row" gap={0.5}>
              <ArticleIcon sx={{ fontSize: 18, verticalAlign: 'middle' }} />
              {label}
            </Stack>
          ),
        });
      }
    }
    return items;
  }, [postType, post, posts]);

  // ─── Callbacks ───────────────────────────────────────────────────────────────
  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    pagination.onPageChange(value);
    if (firstPostRef.current) {
      jump(firstPostRef.current, {
        duration: 300,
        offset: -150,
      });
    }
  };

  if (is404) {
    return notFound();
  }

  if (isSinglePost) {
    return null;
  }

  if (isLoading) {
    return <BlogArticlesLoading />;
  }

  // Show no articles component when there are no posts
  if (posts.length === 0) {
    const cateory = posts[0]?.category;
    const categoryName =
      postType === PostType.CATEGORY && typeof cateory !== 'string' ? cateory?.name : undefined;

    const tag = posts[0]?.tags?.[0];
    const tagName = postType === PostType.TAG && typeof tag !== 'string' ? tag?.name : undefined;

    return (
      <main aria-label="Blog main content" itemType="https://schema.org/Blog" itemScope>
        {breadcrumbItems.length > 1 ? (
          <Box mb={2} mt={1}>
            <Breadcrumbs items={breadcrumbItems} />
          </Box>
        ) : null}
        <BlogNoArticles
          categoryName={categoryName}
          searchQuery={search.value || undefined}
          tagName={tagName || ''}
        />
      </main>
    );
  }

  return (
    <main aria-label="Blog main content" itemType="https://schema.org/Blog" itemScope>
      {!isLoading && breadcrumbItems.length > 1 ? (
        <Box mb={2} mt={1}>
          <Breadcrumbs items={breadcrumbItems} />
        </Box>
      ) : null}
      <Stack
        aria-label="Blog articles list"
        component="section"
        role="region"
        spacing={1.5}
        useFlexGap
      >
        {posts.map((p, idx) => {
          const image = typeof p.featuredImage !== 'string' ? p.featuredImage : null;
          const category = typeof p.category !== 'string' ? p.category : null;
          return (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              key={p.id}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
            >
              <Card
                aria-labelledby={`blog-post-title-${p.id}`}
                component="article"
                elevation={0}
                itemType="https://schema.org/BlogPosting"
                ref={idx === 0 ? firstPostRef : undefined}
                sx={{ borderRadius: 0 }}
                tabIndex={0}
                itemScope
              >
                {image?.url ? (
                  <HoverScale
                    sx={{
                      borderRadius: 'calc(var(--mui-shape-borderRadius) * 1)',
                      height: 300,
                    }}
                  >
                    <Image
                      alt={image?.alt ? image.alt : `Featured image for ${p.title}`}
                      aria-label={image?.alt ? image.alt : `Featured image for ${p.title}`}
                      itemProp="image"
                      src={image.url}
                      style={{ display: 'block', objectFit: 'cover' }}
                      fill
                    />
                  </HoverScale>
                ) : null}
                <CardContent sx={{ pb: 0, pt: 1.5, px: 0 }}>
                  <Box mb={1}>
                    <Box mb={1}>
                      <PostMeta
                        category={category?.name || ''}
                        categorySlug={category?.slug}
                        publishedAt={p.publishedAt}
                      />
                    </Box>
                    <Typography
                      sx={{
                        display: 'block',
                        mb: 1,
                        outline: 0,
                        wordBreak: 'break-word',
                      }}
                      component="h2"
                      fontWeight={600}
                      id={`blog-post-title-${p.id}`}
                      itemProp="headline"
                      variant="h5"
                    >
                      {p.title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      component="p"
                      itemProp="description"
                      variant="body1"
                    >
                      {p.excerpt}...
                    </Typography>
                  </Box>
                  <Box mt={2}>
                    <Button
                      aria-label={`Read more about ${p.title}`}
                      color="tertiary"
                      component={Link}
                      endIcon={<ArrowForwardIcon />}
                      href={`/blog/${p.slug}`}
                      itemProp="url"
                      prefetch={false}
                      size="small"
                      variant="text"
                    >
                      Read more
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </Stack>
      {totalPages > 1 ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination
            aria-label="Pagination navigation"
            color="tertiary"
            count={totalPages}
            onChange={handlePageChange}
            page={pagination.pageIndex}
            role="navigation"
            showFirstButton
            showLastButton
          />
        </Box>
      ) : null}
    </main>
  );
}
