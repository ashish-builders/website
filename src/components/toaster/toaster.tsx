'use client';

import * as React from 'react';
import { Toaster as RhToaster } from 'react-hot-toast';

function Toaster(props: React.ComponentProps<typeof RhToaster>) {
  return <RhToaster {...props} />;
}

export { Toaster };
