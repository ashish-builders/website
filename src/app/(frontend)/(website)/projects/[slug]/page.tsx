import * as React from 'react';
import { Project } from '@/modules/website/projects/single-project/project';
import { createMetadata } from '@/lib/seo';
import { getClientSideURL } from '@/lib/get-url';
import { notFound } from 'next/navigation';
import projects from '@/data/projects';

export const dynamic = 'auto';
export const revalidate = 3600;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: PageProps) {
  const { params } = props;
  const { slug } = await params;

  const baseURL = getClientSideURL();

  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    notFound();
  }

  return createMetadata({
    alternates: {
      canonical: `${baseURL}/projects/${project.slug}`,
      languages: {
        'en-IN': `${baseURL}/projects/${project.slug}`,
      },
    },
    description: project.seo.description,
    keywords: project.seo.keywords.split(',').map((k) => k.trim()),
    title: project.seo.title,
  });
}

export default async function Page() {
  return <Project />;
}
