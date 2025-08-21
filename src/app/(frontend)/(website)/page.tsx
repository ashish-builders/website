import { ErrorBoundary } from 'react-error-boundary';
import { createMetadata, OrganizationJsonLd } from '@/lib/seo';
import { addressLocality, addressRegion } from '@/constants/contact-constants';
import * as React from 'react';
import { getClientSideURL } from '@/lib/get-url';
import { alternateName, siteName } from '@/constants/site-info';
import JsonLD from '@/components/piplup-jsrepo/json-ld';
import { StatisticsSection } from '@/modules/website/statistics-section';
import { HeroSection } from '@/modules/website/home/hero-section';
import { CompanyDescriptionSection } from '@/modules/website/home/company-description-section';
import { FeaturedProjects } from '@/modules/website/home/featured-projects';
import { WhatWeDo } from '@/modules/website/home/what-we-do-section';
import { AboutUsSection } from '@/modules/website/home/about-us-section';
import { AdSection } from '@/modules/website/home/ad-section';
import { CustomerTestimonailsSection } from '@/modules/website/home/customer-testimonials-section';

export const dynamic = 'force-static';
export const revalidate = 600;

const baseURL = getClientSideURL();

export const metadata = createMetadata({
  alternates: {
    canonical: baseURL,
    languages: {
      'en-IN': baseURL,
    },
  },
  description: `Discover premium apartments, luxury villas, and commercial spaces in ${addressLocality} by ${siteName}. Over 20 years of trusted real estate development in ${addressRegion} with quality construction and timely delivery.`,
  keywords: [
    siteName,
    alternateName,
    'Real Estate Kashipur',
    'Property Developer Uttarakhand',
    'Apartments Kashipur',
    'Villas Kashipur',
    'Commercial Property Kashipur',
    'Premium Real Estate',
    'Property Investment Uttarakhand',
    'Residential Projects Kashipur',
    'Prakash Nilayam',
    'Real Estate Developer India',
    '2 BHK Apartments Kashipur',
    '3 BHK Apartments Kashipur',
    'Luxury Villas Kashipur',
    'Luxury Apartments Kashipur',
  ],
  title: `Most Trusted Builder in ${addressLocality}, ${addressRegion} | ${siteName}`,
});

export default async function Page() {
  return (
    <React.Fragment>
      <JsonLD data={OrganizationJsonLd()} />
      <main>
        <HeroSection />
        <StatisticsSection />
        <CompanyDescriptionSection />
        <ErrorBoundary fallback={null}>
          <React.Suspense fallback={null}>
            <FeaturedProjects />
          </React.Suspense>
        </ErrorBoundary>
        <WhatWeDo />
        <AboutUsSection />
        <AdSection />
        <ErrorBoundary fallback={null}>
          <React.Suspense fallback={null}>
            <CustomerTestimonailsSection />
          </React.Suspense>
        </ErrorBoundary>
      </main>
    </React.Fragment>
  );
}
