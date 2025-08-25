import * as React from 'react';
import { HeroSection } from '@/modules/website/projects/hero-section';
import { ProjectsList } from '@/modules/website/projects/projects-list';
import { SpecialProjectCard } from '@/modules/website/projects/special-project-card';
import { createMetadata } from '@/lib/seo';
import { getClientSideURL } from '@/lib/get-url';
import { alternateName, siteName } from '@/constants/site-info';
import { addressLocality, addressRegion } from '@/constants/contact-constants';

export const dynamic = 'force-static';
export const revalidate = 3600;

const baseURL = getClientSideURL();

export const metadata = createMetadata({
  alternates: {
    canonical: `${baseURL}/projects`,
    languages: {
      'en-IN': `${baseURL}/projects`,
    },
  },
  description: `Explore ABD Projects offering premium properties near Uttarakhand—crafted for comfort, luxury, and smart investment by Ashish Builders & Developers.`,
  keywords: [
    siteName,
    alternateName,
    'Real Estate Developer',
    addressLocality,
    addressRegion,
    'About Us',
    'Premium Properties',
    'Residential Projects',
    'Commercial Properties',
  ],
  title: `ABD Projects | Premium Properties Near Uttarakhand`,
});

export default async function Page() {
  return (
    <React.Fragment>
      <HeroSection />
      <ProjectsList />
      <SpecialProjectCard height={225} />
    </React.Fragment>
  );
}
