import { createMetadata } from '@/lib/seo';
import { BlogArticles } from '@/modules/website/blog/blog-articles';
import { BlogLayout } from '@/modules/website/blog/blog-layout';
import { BlogSidebar } from '@/modules/website/blog/blog-sidebar';
import { BlogSingle } from '@/modules/website/blog/blog-single';
import { HeroSection } from '@/modules/website/blog/hero-section';
import { PostType } from '@/modules/website/blog/types';
import { getSlugDetails } from '@/modules/website/blog/utils';
import { getSinglePost, getSinglePostSeo } from '@/services/posts/get-single-post';
import Container from '@mui/material/Container';
import dayjs from 'dayjs';
import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { createLoader, parseAsString, type SearchParams } from 'nuqs/server';
import * as React from 'react';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { getClientSideURL } from '@/lib/get-url';
import { siteName } from '@/constants/site-info';
import { getPosts } from '@/services/posts/get-posts';
import { getCategories } from '@/services/category/get-categories';

const getSlugDetailsOrRedirect = React.cache((slugs?: unknown[]) => {
  const details = getSlugDetails(slugs);
  if (details.is404) {
    return redirect('/blog');
  }
  return details;
});

const pageSearchParams = {
  search: parseAsString
    .withOptions({
      throttleMs: 300,
    })
    .withDefault(''),
};

const loadSearchParams = createLoader(pageSearchParams);

const pageSize = 5;

export type PageProps = {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<SearchParams>;
};

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { params, searchParams } = props;
  const pageParams = await params;
  const { search } = await loadSearchParams(searchParams);
  const { isSinglePost, page, post, postType } = getSlugDetailsOrRedirect(pageParams.slug);
  const payload = await getPayload({ config: configPromise });

  const baseURL = getClientSideURL();

  const defaultImage = `${baseURL}/assets/open-graph-default-design.webp`;

  if (isSinglePost) {
    if (!post) {
      return notFound();
    }
    // Fetch the post data and generate metadata
    const response = await getSinglePostSeo({
      payload,
      slug: post,
    });

    const publishedDate = dayjs(response.publishedAt || response.createdAt);
    const modifiedDate = dayjs(response.updatedAt);
    const featuredImage =
      typeof response.featuredImage !== 'string' ? response.featuredImage?.url : null;

    return createMetadata({
      alternates: {
        canonical: `${baseURL}/blog/${post}`,
        languages: {
          'en-IN': `${baseURL}/blog/${post}`,
        },
      },
      category: typeof response.category !== 'string' ? response.category?.name : undefined,
      classification: 'Blog',
      description: (response.meta?.description ?? response.excerpt) || '',
      image: featuredImage || defaultImage,
      indexable: true,
      keywords: [],
      modifiedTime: modifiedDate.isValid() ? modifiedDate.toISOString() : undefined,
      publishedTime: publishedDate.isValid() ? publishedDate.toISOString() : undefined,
      publisher: siteName,
      tags: (typeof response.tags !== 'string' ? response.tags : [])
        ?.map((postTag) => (typeof postTag !== 'string' ? postTag?.name : ''))
        ?.filter(Boolean),
      title: response.meta?.title ?? response.title,
      type: 'article',
      url: `${baseURL}/blog/${post}`,
    });
  }
  // Load search parameters and fetch posts
  const response = await getPosts({
    categories: post && postType === PostType.CATEGORY ? [post] : undefined,
    limit: pageSize,
    page,
    payload,
    search,
    tags: post && postType === PostType.TAG ? [post] : undefined,
  });

  const firstPost = response.docs[0];
  const url = [baseURL, 'blog', postType, post].filter(Boolean).join('/');

  // If no posts found, return 404 metadata
  if (!firstPost) {
    return createMetadata({
      alternates: {
        canonical: url,
        languages: {
          'en-IN': url,
        },
      },
      classification: 'Blog',
      description: 'No blog posts found.',
      image: defaultImage,
      indexable: false,
      keywords: ['404', 'Not Found', 'Blog'],
      title: `404 | ${siteName}`,
      type: 'website',
      url,
    });
  }
  const publishedDate = dayjs(firstPost.publishedAt || firstPost.createdAt);
  const modifiedDate = dayjs(firstPost.updatedAt);

  const tags = typeof firstPost.tags !== 'string' ? firstPost.tags : [];
  const firstPostTag = typeof tags?.[0] !== 'string' ? tags?.[0] : null;

  let title: string = '';
  let description: string = '';
  if (postType === PostType.CATEGORY) {
    const category = typeof firstPost.category !== 'string' ? firstPost.category : null;
    title = category?.meta?.title || `Category: ${category?.name}`;
    description =
      category?.meta?.description || `Explore articles in the ${category?.name} category.`;
  } else if (postType === PostType.TAG) {
    title = firstPostTag?.meta?.title || `Tag: ${firstPostTag?.name}`;
    description =
      firstPostTag?.meta?.description || `Explore articles tagged with ${firstPostTag?.name}.`;
  } else {
    title = `Blog | ${siteName}`;
    description = `Explore our blog for the latest articles on real estate, property development, and market trends in ${siteName}.`;
  }

  return createMetadata({
    alternates: {
      canonical: url,
      languages: {
        'en-IN': url,
      },
    },
    category: postType === PostType.CATEGORY ? post : undefined,
    classification: 'Blog',
    description,
    image: defaultImage,
    indexable: true,
    modifiedTime: modifiedDate.isValid() ? modifiedDate.toISOString() : undefined,
    publishedTime: publishedDate.isValid() ? publishedDate.toISOString() : undefined,
    tags: tags
      ?.map((postTag) => (typeof postTag !== 'string' ? postTag?.name : ''))
      .filter(Boolean),
    title,
    type: 'website',
    url,
  });
}

export default async function Page(props: PageProps) {
  const { params, searchParams } = props;
  const pageParams = await params;
  const { isSinglePost, page, post, postType } = getSlugDetailsOrRedirect(pageParams.slug);

  const payload = await getPayload({ config: configPromise });

  if (isSinglePost) {
    if (!post) {
      return notFound();
    }

    const response = await getSinglePost({
      payload,
      slug: post,
    });

    return (
      <React.Fragment>
        <HeroSection />
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <BlogLayout sidebar={null} disableSidebar>
            <BlogSingle post={response} />
          </BlogLayout>
        </Container>
      </React.Fragment>
    );
  }
  const { search } = await loadSearchParams(searchParams);

  const [posts, recentPosts, popluarCategories] = await Promise.all([
    getPosts({
      categories: post && postType === PostType.CATEGORY ? [post] : [],
      limit: pageSize,
      page,
      payload,
      search,
      tags: post && postType === PostType.TAG ? [post] : [],
    }),
    getPosts({
      categories: [],
      limit: 10,
      page: 1,
      payload,
      search: '',
      tags: [],
    }),
    getCategories({
      limit: 25,
      page: 1,
      payload,
    }),
  ]);

  return (
    <React.Fragment>
      <HeroSection />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <BlogLayout
          disableSidebar={false}
          sidebar={<BlogSidebar categories={popluarCategories} posts={recentPosts.docs} />}
        >
          <BlogArticles page={page} posts={posts.docs} totalPages={posts.totalPages} />
        </BlogLayout>
      </Container>
    </React.Fragment>
  );
}
