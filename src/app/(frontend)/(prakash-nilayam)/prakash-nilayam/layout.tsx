import * as React from 'react';
import { Header } from '@/modules/website/layout/header';
import { Footer } from '@/modules/prakash-nilayam/footer';

type LayoutProps = {
  children: React.ReactNode;
};

const navigation: {
  href: string;
  label: string;
}[] = [
  {
    href: '#overview',
    label: 'Overview',
  },
  {
    href: '#amenities',
    label: 'Amenities',
  },
  {
    href: '#plans',
    label: 'Floor Plans',
  },
  {
    href: '#specifications',
    label: 'Specifications',
  },
  {
    href: '#gallery',
    label: 'Gallery',
  },
];

export default function Layout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <Header navigation={navigation} disableLogoNavigation />
      {children}
      <Footer />
    </React.Fragment>
  );
}
