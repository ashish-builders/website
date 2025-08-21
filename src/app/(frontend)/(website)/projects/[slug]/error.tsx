'use client';

import * as React from 'react';
import { ProjectError } from '@/modules/website/projects/single-project/project-error';

export const dynamic = 'force-static';

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return <ProjectError error={error} resetError={reset} />;
}
