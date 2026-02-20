'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Image } from '@/components/image/image';
import { useRouter } from '@bprogress/next/app';
import { SocialShareButtons } from '@/components/social-share-buttons';
import { Link } from '@/components/link/link';
import RichText, { RichTextProps } from '@/components/rich-text';
import { notFound } from 'next/navigation';
import { PostMeta } from './post-meta';
import { BlogSingleLoading } from './blog-single-loading';

type SinglePost = {
  category?:
    | null
    | string
    | undefined
    | {
        name: string;
        slug: string;
      };
  content?: RichTextProps['data'];
  featuredImage?: null | string | { alt?: null | string; url?: null | string };
  publishedAt: string;
  readTime?: null | string;
  tags?:
    | Array<null | string | undefined | { name?: null | string; slug?: null | string }>
    | null
    | string;
  title: string;
};

type BlogSingleProps = {
  isLoading?: boolean;
  post: SinglePost;
};

export function BlogSingle(props: BlogSingleProps) {
  const { isLoading = false, post } = props;

  // ─── State ───────────────────────────────────────────────────────────────────
  const router = useRouter();

  if (!post) {
    return notFound();
  }

  // ─── Calculation ─────────────────────────────────────────────────────────────
  const featuredImage = typeof post?.featuredImage !== 'string' ? post.featuredImage : null;
  const category = typeof post.category !== 'string' ? post.category : null;
  const tags = (Array.isArray(post.tags) ? post.tags : []).filter(
    (tag) => typeof tag !== 'string' && !!tag?.slug,
  );

  // ─── Callbacks ───────────────────────────────────────────────────────────────
  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push('/blog');
    }
  };

  if (isLoading) {
    return <BlogSingleLoading />;
  }
  return (
    <Container
      component="main"
      itemType="https://schema.org/BlogPosting"
      maxWidth="md"
      sx={{ py: 4 }}
      itemScope
    >
      <Stack spacing={3}>
        <Box>
          <Button
            aria-label="Go back"
            color="inherit"
            onClick={handleBack}
            startIcon={<ArrowBackIcon />}
            sx={{ minWidth: 0 }}
            variant="text"
          >
            Back
          </Button>
        </Box>
        <Typography component="h1" fontWeight={700} itemProp="headline" variant="h4">
          {post.title}
        </Typography>
        <PostMeta
          category={category?.name || ''}
          categorySlug={category?.slug || ''}
          publishedAt={post.publishedAt}
          readMinutes={post.readTime}
        />
        {featuredImage?.url && (
          <Box
            sx={{
              borderRadius: 1,
              height: { sm: 400, xs: 220 },
              overflow: 'hidden',
              width: '100%',
            }}
            itemProp="image"
            position="relative"
          >
            <Image
              alt={featuredImage.alt || post.title}
              loading="eager"
              src={featuredImage.url}
              style={{ objectFit: 'cover' }}
              fill
              priority
            />
          </Box>
        )}
        <Box itemProp="articleBody" width={post.content ? '100%' : undefined}>
          {post.content ? <RichText data={post.content} enableGutter={false} enableProse /> : null}
        </Box>
        {tags.length > 0 && (
          <React.Fragment>
            <Divider />
            <Box display="flex" flexWrap="wrap" gap={1} itemProp="keywords" mt={2}>
              {tags.map((tag) => {
                if (!tag || typeof tag !== 'object' || !tag?.slug || !tag?.name) {
                  return null;
                }
                return (
                  <Chip
                    aria-label={`View posts tagged ${tag?.name}`}
                    component={Link}
                    href={`/blog/tag/${tag?.slug}`}
                    itemProp="url"
                    key={tag?.name}
                    label={`#${tag?.name}`}
                    prefetch={false}
                    role="link"
                    size="small"
                    clickable
                  />
                );
              })}
            </Box>
          </React.Fragment>
        )}
        <SocialShareButtons title={post.title} />
      </Stack>
    </Container>
  );
}
