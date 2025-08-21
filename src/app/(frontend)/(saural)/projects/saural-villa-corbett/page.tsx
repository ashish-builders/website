import { HeroSection } from '@/modules/saural/hero-section';
import { createMetadata, JsonLd } from '@/lib/seo';
import { AboutSection } from '@/modules/saural/about-section';
import AboutPropertySection from '@/modules/saural/about-property-section';
import { AmenitiesSection } from '@/modules/saural/amenities-section';
import { ComfortSection } from '@/modules/saural/comfort-section';
import { FloorPlanSection } from '@/modules/saural/floor-plan-section';
import { GallerySection } from '@/modules/saural/gallery-section';
import { Footer } from '@/modules/saural/footer';
import { Header } from '@/modules/saural/layout/header';
import { EnquireNowFixedButton } from '@/modules/website/enquire-now-dialog/enquire-now-fixed-button';
import { EnquireNowDialogProvider } from '@/modules/website/enquire-now-dialog/enquire-now-dialog-provider';
import * as React from 'react';
import { type Residence } from 'schema-dts';
import { getClientSideURL } from '@/lib/get-url';
import JsonLD from '@/components/piplup-jsrepo/json-ld';
import { notFound } from 'next/navigation';
import projects from '@/data/projects';

export const dynamic = 'force-static';
export const revalidate = 3600;

const slug = 'saural-villa-corbett';
const baseURL = getClientSideURL();

const jsonLd = JsonLd<Residence>({
  '@type': 'Residence',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressLocality: 'Corbett',
    addressRegion: 'Uttarakhand',
  },
  brand: {
    '@type': 'Organization',
    name: 'Ashish Builders',
    url: baseURL,
  },
  description:
    "Discover Saural Villa Corbett - luxury villas by Ashish Builders in Corbett. Enjoy modern amenities, scenic views, and premium living in Uttarakhand's prime location.",
  name: 'Saural Villa Corbett',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'INR',
    url: `${baseURL}/projects/${slug}`,
  },
  url: `${baseURL}/projects/${slug}`,
});

export const metadata = createMetadata({
  category: 'Real Estate',
  description:
    'Discover Saural Villa Corbett - luxury villas by Ashish Builders in Corbett. Enjoy modern amenities, scenic views, and premium living in Uttarakhand’s prime location.',
  image: `${baseURL}/assets/projects/saural-villa-corbett/cover.jpg`,
  indexable: true,
  keywords: [
    'Saural Villa Corbett',
    'Ashish Builders',
    'Luxury Villas Corbett',
    'Villas in Uttarakhand',
    'Premium Real Estate Corbett',
    'Corbett Villas',
    'Buy Villa Corbett',
    'Luxury Property Uttarakhand',
  ],
  tags: ['Luxury Villas', 'Corbett', 'Ashish Builders', 'Uttarakhand', 'Premium Property'],
  title: 'Saural Villa Corbett | Premium Villas in Corbett by Ashish Builders',
  type: 'article',
  url: `${baseURL}/projects/saural-villa-corbett`,
});

export default async function Page() {
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return notFound();
  }

  return (
    <React.Fragment>
      <Header />
      <main>
        {/* SEO: JSON-LD Structured Data */}
        <JsonLD data={jsonLd} />
        <HeroSection />
        <AboutSection />
        <AboutPropertySection />
        <AmenitiesSection
          amenities={project.amenities.map((amenity) => ({
            alt: amenity.title,
            caption: amenity.caption,
            height: amenity.height,
            title: amenity.title,
            url: amenity.image,
            width: amenity.width,
          }))}
        />
        <ComfortSection />
        <FloorPlanSection floorPlans={project.floorPlans} />
        <GallerySection
          images={project.exteriorImages.map((img) => ({
            alt: project.name,
            caption: null,
            height: img.height,
            url: img.src,
            width: img.width,
          }))}
        />
      </main>
      <Footer />
      <EnquireNowDialogProvider>
        <EnquireNowFixedButton />
      </EnquireNowDialogProvider>
    </React.Fragment>
  );
}
