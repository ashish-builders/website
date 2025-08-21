'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import { notFound, useParams } from 'next/navigation';
import { ErrorBoundary } from 'react-error-boundary';
import projects from '@/data/projects';
import locations from '@/data/locations';
import { getBlurURL } from '@/lib/image';
import { HeroSection } from './hero-section';
import { ProjectOverview } from './project-overview';
import { FloorPlans } from '../../../floor-plans';
import { Specification } from './specifications';
import { ProjectImages } from './project-images';
import { LocationSection } from './location-section';
import { ContactSection } from '../../contact-section';
import { ProjectSkeleton } from './project-skeleton';
import { ProjectError } from './project-error';

function ProjectComponent() {
  // ─── State ───────────────────────────────────────────────────────────
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    notFound();
  }

  const featuredImage = project.featuredImage;
  const brochure = project.brochure;
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
      <HeroSection
        address={project.address}
        brochure={brochure}
        featuredImage={featuredImage}
        featuredImageBlurDataUrl={getBlurURL(featuredImage)}
        name={project.name}
        reraNumber={project.reraNumber}
      />
      <ProjectOverview
        amenities={amenities}
        name={project.name}
        overview={project.overviewContent}
      />
      <FloorPlans plans={plans} />
      <Specification specifications={specifications} />
      <ProjectImages exteriorImages={exteriorImages} interiorImages={interiorImages} />
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <LocationSection address={address} />
      </Container>
      <ContactSection />
    </React.Fragment>
  );
}

export function Project() {
  return (
    <ErrorBoundary FallbackComponent={ProjectError}>
      <React.Suspense fallback={<ProjectSkeleton />}>
        <ProjectComponent />
      </React.Suspense>
    </ErrorBoundary>
  );
}
