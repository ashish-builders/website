import * as React from 'react';
import { HeroSection } from '@/modules/website/projects/hero-section';
import { ProjectsList } from '@/modules/website/projects/projects-list';
import { SpecialProjectCard } from '@/modules/website/projects/special-project-card';

export const dynamic = 'force-static';
export const revalidate = 3600;

export default async function Page() {
  return (
    <React.Fragment>
      <HeroSection />
      <ProjectsList />
      <SpecialProjectCard height={225} />
    </React.Fragment>
  );
}
