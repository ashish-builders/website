import * as React from 'react';
import { Header } from '@/modules/website/layout/header';
import { SlideRail } from '@/modules/website/layout/slide-rail';
import { Footer } from '@/modules/website/layout/footer';
import navigationConfig from '@/modules/website/layout/navigation.json';

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Header navigation={navigationConfig.items} />
      {children}
      <SlideRail />
      <Footer />
    </React.Fragment>
  );
}
