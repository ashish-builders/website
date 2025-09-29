import * as React from 'react';
import { getClientSideURL } from '@/lib/get-url';
import projects from '@/data/projects';
import locations from '@/data/locations';
import { notFound } from 'next/navigation';
import { createMetadata, JsonLd } from '@/lib/seo';
import { type Residence } from 'schema-dts';
import { getBlurURL } from '@/lib/image';
import JsonLD from '@/components/piplup-jsrepo/json-ld';
import { ProjectOverview } from '@/modules/website/projects/single-project/project-overview';
import { FloorPlans } from '@/modules/floor-plans';
import { Specification } from '@/modules/website/projects/single-project/specifications';
import { ProjectImages } from '@/modules/website/projects/single-project/project-images';
import { LocationSection } from '@/modules/website/projects/single-project/location-section';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { CallToAction } from '@/modules/prakash-nilayam/call-to-action';
import { HeroSection } from '@/modules/prakash-nilayam/hero-section';

const slug = 'prakash-nilayam';
const baseURL = getClientSideURL();

const project = projects.find((p) => p.slug === slug);

const jsonLd = JsonLd<Residence>({
  '@type': 'Residence',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressLocality: 'Opp. Govt Hospital, Ramnagar Road, Kashipur',
    addressRegion: 'Uttarakhand',
  },
  brand: {
    '@type': 'Organization',
    name: 'Ashish Builders',
    url: baseURL,
  },
  description:
    'Explore Prakash Nilayam by ABD—best residential society in Kashipur with 2/3 BHK homes, duplexes & villas in a lush 25-acre green township.',
  name: 'Prakash Nilayam by ABD',
  url: `${baseURL}/${slug}`,
});

export const metadata = createMetadata({
  alternates: {
    canonical: `${baseURL}/${slug}`,
    languages: {
      'en-IN': `${baseURL}/${slug}`,
    },
  },
  description:
    'Explore Prakash Nilayam by ABD—best residential society in Kashipur with 2/3 BHK homes, duplexes & villas in a lush 25-acre green township.',
  keywords: [],
  title: 'Prakash Nilayam by ABD',
});

export default async function Page() {
  if (!project) {
    return notFound();
  }

  const featuredImage = project.featuredImage;
  const location = locations.find((loc) => loc.Pincode === project.pincode);

  const address = `${[project.address, location?.District, location?.State]
    .filter(Boolean)
    .join(', ')} - ${location?.Pincode || ''}`;

  const amenities: Array<{
    caption: null | string;
    publicUrl: string;
    title: null | string;
  }> = project.amenities.map((amenity) => ({
    caption: amenity.caption || null,
    publicUrl: amenity.image,
    title: amenity.title || null,
  }));
  const plans = (Array.isArray(project.floorPlans) ? project.floorPlans : []).map((plan) => {
    return {
      images: plan.images.map((img) => {
        const placeholder = img ? 'blur' : 'empty';
        return {
          alt: project.name || null,
          blurDataUrl: getBlurURL(img.src) || undefined,
          height: img.height || 300,
          placeholder: placeholder as 'blur' | 'empty',
          src: img.src,
          width: img.width || 300,
        };
      }),
      name: plan.name,
    };
  });

  const specifications = project.specificationImages?.map((spec) => ({
    caption: spec.caption || null,
    publicUrl: spec.image,
    title: spec.title || null,
  }));

  const interiorImages =
    project.interiorImages?.map((image, idx) => ({
      alt: `Interior Image ${idx + 1}: ${project.name}`,
      caption: null,
      height: image.height || 400,
      src: image.src,
      width: image.width || 400,
    })) || [];
  const exteriorImages =
    project.exteriorImages?.map((image, idx) => ({
      alt: `Exterior Image ${idx + 1}: ${project.name}`,
      caption: null,
      height: image.height || 400,
      src: image.src,
      width: image.width || 400,
    })) || [];

  return (
    <React.Fragment>
      <JsonLD data={jsonLd} />
      <main>
        <HeroSection />
        <Box id="overview" sx={{ scrollMarginTop: 11 }}>
          <ProjectOverview
            amenities={amenities}
            name={project.name}
            overview={project.overviewContent}
          />
        </Box>
        <Box id="plans" sx={{ scrollMarginTop: 11 }}>
          <FloorPlans plans={plans} />
        </Box>
        <Box id="specifications" sx={{ scrollMarginTop: 11 }}>
          <Specification specifications={specifications} />
        </Box>
        <Box id="gallery" sx={{ scrollMarginTop: 11 }}>
          <ProjectImages exteriorImages={exteriorImages} interiorImages={interiorImages} />
        </Box>
        <Box id="location" sx={{ scrollMarginTop: 11 }}>
          <Container maxWidth="lg" sx={{ mb: 6 }}>
            <LocationSection address={address} />
          </Container>
        </Box>
        <CallToAction image={featuredImage} />
      </main>
    </React.Fragment>
  );
}
