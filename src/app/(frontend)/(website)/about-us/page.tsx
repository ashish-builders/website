import * as React from 'react';
import { ContactSection } from '@/modules/website/contact-section';
import { HeroSection } from '@/modules/website/about-us/hero-section';
import { OurStorySection } from '@/modules/website/about-us/our-story-section';
import { ServicesSection } from '@/modules/website/about-us/services-section';
import { StatisticsSection } from '@/modules/website/statistics-section';
import { createMetadata, OrganizationJsonLd } from '@/lib/seo';
import { addressLocality, addressRegion } from '@/constants/contact-constants';
import { getClientSideURL } from '@/lib/get-url';
import { alternateName, siteName } from '@/constants/site-info';
import JsonLD from '@/components/piplup-jsrepo/json-ld';

export const dynamic = 'force-static';
export const revalidate = 3600;

const baseURL = getClientSideURL();

export const metadata = createMetadata({
  alternates: {
    canonical: `${baseURL}/about-us`,
    languages: {
      'en-IN': `${baseURL}/about-us`,
    },
  },
  description: `Learn about ${siteName}, a leading real estate developer in ${addressLocality}, ${addressRegion}. With over 20 years of experience, we specialize in premium residential and commercial properties.`,
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
  title: `About Us | ${siteName}`,
});
export default async function Page() {
  return (
    <React.Fragment>
      <JsonLD data={OrganizationJsonLd()} />
      <main>
        <HeroSection />
        <OurStorySection />
        <ServicesSection />
        <StatisticsSection />
        <ContactSection />
      </main>
    </React.Fragment>
  );
}
