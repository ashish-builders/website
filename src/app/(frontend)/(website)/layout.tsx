import * as React from 'react';
import { Header } from '@/modules/website/layout/header';
import { SlideRail } from '@/modules/website/layout/slide-rail';
import { Footer } from '@/modules/website/layout/footer';

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <SlideRail />
      <Footer />
    </React.Fragment>
  );
}
