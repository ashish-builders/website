import * as React from 'react';
import { Project } from '@/modules/website/projects/single-project/project';

export const dynamic = 'force-static';
export const revalidate = 3600;

export default async function Page() {
  return <Project />;
}
