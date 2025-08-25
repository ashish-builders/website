import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { HeroSection } from '@/modules/website/contact-us/hero-section';
import { ContactForm } from '@/modules/website/contact-us/contact-form';
import { GetInTouch } from '@/modules/website/contact-us/get-in-touch';
import { LocationSection } from '@/modules/website/contact-us/location-section';
import { createMetadata, OrganizationJsonLd } from '@/lib/seo';
import { addressLocality, addressRegion } from '@/constants/contact-constants';
import { alternateName, siteName } from '@/constants/site-info';
import JsonLD from '@/components/piplup-jsrepo/json-ld';
import { getClientSideURL } from '@/lib/get-url';

export const dynamic = 'force-static';
export const revalidate = 3600;

const baseURL = getClientSideURL();

export const metadata = createMetadata({
  alternates: {
    canonical: `${baseURL}/contact-us`,
    languages: {
      'en-IN': `${baseURL}/contact-us`,
    },
  },
  description: `Contact Ashish Builders & Developers – the best real estate builder in Kashipur for quality 2 BHK, 3 BHK, 4 BHK, and duplex homes for sale or rent.`,
  keywords: [
    siteName,
    alternateName,
    'Contact Us',
    'Get in Touch',
    'Real Estate Developer',
    addressLocality,
    addressRegion,
    'Apartments',
    'Villas',
    'Commercial Spaces',
    'Phone',
    'Email',
    'Location',
  ],
  title: `Contact Us | Best Real Estate Builder in Kashipur`,
});
export default function Page() {
  return (
    <React.Fragment>
      <JsonLD data={OrganizationJsonLd()} />
      <HeroSection />
      <Box py={{ lg: 8, xs: 4 }}>
        <Box maxWidth="lg" mx="auto" px={{ lg: 8, xs: 2 }}>
          <Grid alignItems="flex-start" spacing={6} container>
            <Grid size={{ lg: 6, xs: 12 }}>
              <ContactForm />
            </Grid>
            <Grid size={{ lg: 6, xs: 12 }}>
              <GetInTouch />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <LocationSection />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
}
