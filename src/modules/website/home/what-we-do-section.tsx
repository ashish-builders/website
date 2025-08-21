import { Fade } from '@/components/motion/fade/fade';
import { HoverScale } from '@/components/motion/hover-scale/hover-scale';
import { Section } from '@/modules/website/layout/section';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import * as React from 'react';

const activities = [
  {
    description:
      "Trusted for ethical practices, sincerity, and unmatched quality, making us Kashipur's top real estate brand.",
    image: '/assets/home/what-we-do/apartments.png',
    title: 'Villas',
  },
  {
    description:
      'Build homes that bring happiness and peace, fulfilling the needs of individuals, families, and communities with outstanding living spaces.',
    image: '/assets/home/what-we-do/villas.png',
    title: 'Vacation Homes',
  },
  {
    description:
      'Over 20 years of expertise, delivering premium commercial spaces with modern amenities in prime locations.',
    image: '/assets/home/what-we-do/commercial-spaces.png',
    title: 'Commercial Spaces',
  },
] as const;

export function WhatWeDo() {
  const sectionId = React.useId();

  return (
    <Box sx={{ py: 8 }}>
      <Section
        header={
          <Fade>
            <span>
              What <mark>We Do</mark>
            </span>
          </Fade>
        }
        microdata={{
          contentItemProp: 'hasOfferCatalog',
          headerItemProp: 'name',
          itemScope: true,
          itemType: 'https://schema.org/Service',
          subheaderItemProp: 'description',
        }}
        subheader={
          <Fade delay={100}>
            We craft exceptional homes by leveraging our in-house expertise and collaborating with
            top industry professionals.
          </Fade>
        }
        ariaLabel="Our Real Estate Services"
        contentAriaLabel="Discover our range of real estate services including apartments, villas, and commercial spaces"
        headerId={`${sectionId}-heading`}
        headingLevel={2}
      >
        <Container maxWidth="lg" sx={{ pt: 3 }}>
          <Grid
            aria-label="Our real estate services"
            component="div"
            itemType="https://schema.org/OfferCatalog"
            role="list"
            spacing={2.75}
            container
            itemScope
          >
            {activities.map((activity, index) => (
              <Grid key={activity.title} size={{ md: 4, xs: 12 }}>
                <Fade delay={200}>
                  <Card
                    sx={{
                      borderRadius: 2.5,
                      height: 460,
                      isolation: 'isolate',
                      position: 'relative',
                    }}
                    aria-labelledby={`${sectionId}-activity-${index}`}
                    component="article"
                    itemType="https://schema.org/Offer"
                    role="listitem"
                    itemScope
                  >
                    <HoverScale
                      sx={{
                        height: '100%',
                        position: 'absolute',
                        width: '100%',
                        zIndex: -1,
                      }}
                    >
                      <Image
                        alt={`${activity.title} real estate services - ${activity.description}`}
                        itemProp="image"
                        loading="lazy"
                        priority={false}
                        quality={100}
                        role="img"
                        sizes="(max-width: 600px) 100vw, 33vw"
                        src={activity.image}
                        style={{ objectFit: 'cover', zIndex: -1 }}
                        fill
                      />
                    </HoverScale>
                    <CardContent
                      sx={{
                        color: 'common.white',
                        p: 4,
                      }}
                    >
                      <Typography
                        sx={{
                          color: 'inherit',
                          fontSize: '1.5rem',
                          fontWeight: 500,
                        }}
                        aria-level={3}
                        component="h3"
                        id={`${sectionId}-activity-${index}`}
                        itemProp="name"
                        role="heading"
                      >
                        {activity.title}
                      </Typography>
                      <Typography
                        component="p"
                        itemProp="description"
                        sx={{ color: 'inherit', fontSize: '1rem', mt: 1 }}
                        variant="body1"
                      >
                        {activity.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>
    </Box>
  );
}
