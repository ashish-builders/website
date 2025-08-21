import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import { Section } from '@/modules/website/layout/section';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SecurityIcon from '@mui/icons-material/Security';
import ForestIcon from '@mui/icons-material/Forest';
import { Fade } from '@/components/motion/fade/fade';

const services: {
  description: string;
  icon: React.ReactNode;
  title: string;
}[] = [
  {
    description:
      'Architectural designs that blend luxury and sophistication, harmonizing with the surrounding environment to offer an unparalleled living experience.',
    icon: <HomeWorkIcon color="quaternary" fontSize="large" />,
    title: 'Superior Quality Construction',
  },
  {
    description:
      'A dedicated team always available to assist and support residents, ensuring a hassle-free and satisfying living experience.',
    icon: <SupportAgentIcon color="quaternary" fontSize="large" />,
    title: 'Exceptional Customer Service',
  },
  {
    description:
      '24/7 gated access and professional security personnel to guarantee a safe and secure living environment.',
    icon: <SecurityIcon color="quaternary" fontSize="large" />,
    title: 'Uncompromised Security',
  },
  {
    description:
      'Development of communities with a commitment to environmental harmony, ensuring a clean, green, and serene living space.',
    icon: <ForestIcon color="quaternary" fontSize="large" />,
    title: 'Sustainable & Green Living',
  },
];

export function ServicesSection() {
  return (
    <Box sx={{ pb: 4, pt: 8 }}>
      <Section
        header={
          <Fade>
            <span>
              What <mark>We Offer</mark>
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
          <Fade>
            <span>Comprehensive real estate solutions designed to exceed your expectations</span>
          </Fade>
        }
        ariaLabel="Our Services"
      >
        <Container maxWidth="lg" sx={{ pt: 3 }}>
          <Grid spacing={4} container>
            {services.map((service, index) => (
              <Grid key={index} size={{ md: 6, xs: 12 }}>
                <Fade>
                  <Card
                    sx={{
                      '&:hover': {
                        boxShadow: 3,
                        transform: 'translateY(-4px)',
                      },
                      height: '100%',
                      transition: 'all 0.3s ease',
                    }}
                    aria-label={service.title}
                    itemType="https://schema.org/Offer"
                    role="listitem"
                    itemScope
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Stack alignItems="flex-start" direction="row" spacing={2} useFlexGap>
                        <Box
                          sx={{
                            alignItems: 'center',
                            backgroundColor:
                              'color-mix(in srgb, var(--mui-palette-quaternary-light) 15%, white 85%)',
                            borderRadius: 1,
                            color: 'quaternary.main',
                            display: 'flex',
                            flexShrink: 0,
                            height: 80,
                            justifyContent: 'center',
                            p: 1.5,
                            width: 80,
                          }}
                          aria-hidden="true"
                        >
                          {service.icon}
                        </Box>
                        <Stack direction="column">
                          <Typography
                            itemProp="name"
                            sx={{ fontWeight: 500, lineHeight: 1.2, mb: 0.5 }}
                            variant="h6"
                          >
                            {service.title}
                          </Typography>
                          <Typography
                            color="text.secondary"
                            itemProp="description"
                            sx={{ lineHeight: 1.6 }}
                            variant="body2"
                          >
                            {service.description}
                          </Typography>
                        </Stack>
                      </Stack>
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
