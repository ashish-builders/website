import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CountUp } from '@/components/motion/count-up/count-up';
import { Fade } from '@/components/motion/fade/fade';

const statisticsData = [
  {
    description: 'Successfully delivered residential projects in Kashipur',
    itemProp: 'numberOfEmployees', // Using as a general metric
    label: 'COMPLETED PROJECTS',
    schemaType: 'https://schema.org/QuantitativeValue',
    suffix: '+',
    value: 8,
  },
  {
    description: 'Premium villas built across various residential societies',
    itemProp: 'makesOffer',
    label: 'LUXURY VILLAS',
    schemaType: 'https://schema.org/Product',
    suffix: '+',
    value: 1000,
  },
  {
    description: 'High-quality apartments delivered to satisfied customers',
    itemProp: 'makesOffer',
    label: 'PREMIUM APARTMENTS',
    schemaType: 'https://schema.org/Product',
    suffix: '+',
    value: 500,
  },
  {
    description: 'Decades of expertise in real estate development',
    itemProp: 'foundingDate',
    label: 'YEARS OF EXPERIENCE',
    schemaType: 'https://schema.org/QuantitativeValue',
    suffix: '+',
    value: 20,
  },
];

export function StatisticsSection() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pb: 6,
        pt: 4,
      }}
      aria-labelledby="statistics-heading"
      component="section"
      itemType="https://schema.org/Organization"
      role="region"
      itemScope
    >
      <Box
        sx={{
          maxWidth: 'lg',
          mx: 'auto',
          px: { lg: 15, xs: 2 },
        }}
      >
        {/* Screen reader heading for context */}
        <Typography
          className="sr-only"
          component="h2"
          id="statistics-heading"
          itemProp="description"
          variant="h2"
        >
          Company Statistics and Achievements
        </Typography>

        {/* Hidden microdata for organization info */}
        <meta content="Ashish Builders and Developers" itemProp="name" />
        <meta content="Ashish Builders and Developers" itemProp="legalName" />
        <meta content="Kashipur, India" itemProp="foundingLocation" />
        <meta content="Real Estate Development" itemProp="knowsAbout" />
        <meta content="Residential Construction" itemProp="knowsAbout" />
        <meta content="Kashipur" itemProp="areaServed" />

        <Grid
          aria-label="Company performance statistics"
          role="list"
          spacing={{ lg: 8, xs: 4 }}
          textAlign="center"
          container
        >
          {statisticsData.map((item, index) => (
            <Grid key={item.label} size={{ lg: 3, md: 6, xs: 12 }}>
              <Box
                sx={{
                  '&:focus-within': {
                    borderRadius: 1,
                    outline: '2px solid',
                    outlineColor: 'quaternary.main',
                    outlineOffset: '4px',
                  },
                }}
                aria-describedby={`stat-desc-${index}`}
                aria-labelledby={`stat-label-${index}`}
                component="article"
                itemType={item.schemaType}
                role="listitem"
                itemScope
              >
                <Typography
                  sx={{
                    '&:focus-visible': {
                      outline: 'none',
                    },
                    color: 'quaternary.main',
                    fontSize: { lg: '3.25rem', xs: '2.25rem' },
                    fontWeight: 'light',
                    mb: { lg: 2, xs: 1 },
                  }}
                  component="h3"
                  itemProp="value"
                  variant="h3"
                >
                  <CountUp aria-hidden="true" suffix={item.suffix}>
                    {item.value}
                  </CountUp>
                </Typography>
                <Fade>
                  <Typography
                    sx={{
                      color: 'text.primary',
                      fontSize: '0.875rem',
                      fontWeight: 'normal',
                      letterSpacing: '1.76px',
                      mb: 1,
                    }}
                    component="h4"
                    id={`stat-label-${index}`}
                    itemProp="name"
                    variant="body1"
                  >
                    {item.label}
                  </Typography>
                </Fade>
                <Fade>
                  <Typography
                    className="sr-only"
                    id={`stat-desc-${index}`}
                    itemProp="description"
                    variant="body2"
                  >
                    {item.description}
                  </Typography>
                </Fade>
                {/* Hidden microdata for additional context */}
                <meta content={item.suffix} itemProp="unitText" />
                <meta content="Real Estate Statistics" itemProp="category" />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
