import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import LocationIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { address, phoneNumber, email } from '@/constants/contact-constants';
import { siteName } from '@/constants/site-info';
import { LeadForm } from './lead-form';

const CONTACT_DETAILS = [
  {
    icon: <LocationIcon />,
    label: 'Address',
    value: address,
  },
  {
    icon: <PhoneIcon />,
    label: 'Phone',
    value: phoneNumber,
  },
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: email,
  },
];

export function ContactSection() {
  return (
    <Box
      sx={{
        background: `linear-gradient(90deg, var(--mui-palette-background-paper), color-mix(in srgb, var(--mui-palette-quaternary-main) 15%, white 85%))`,
        py: 10,
      }}
      aria-label={`Contact ${siteName}`}
      component="section"
      itemType="https://schema.org/ContactPoint"
      role="region"
      itemScope
    >
      <Container maxWidth="lg">
        <Grid alignItems="center" spacing={6} container>
          <Grid size={{ lg: 7, md: 6, xs: 12 }}>
            <Typography
              sx={{
                '& mark': {
                  backgroundColor: 'transparent',
                  color: 'quaternary.main',
                  padding: 0,
                },
                color: 'text.primary',
                fontSize: '2.15rem',
                fontWeight: 500,
                lineHeight: 1.2,
                mb: 1,
              }}
              itemProp="name"
              tabIndex={0}
              variant="h2"
            >
              Ready to <mark>Build Your Dream?</mark>
            </Typography>
            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: { lg: '1.125rem', xs: '1rem' },
                lineHeight: 1.6,
                mb: 4,
              }}
              itemProp="description"
              variant="body1"
            >
              Reach out to our expert team for personalized guidance on your property needs. Whether
              you are buying your first home or investing in real estate, we are here to answer your
              questions and help you navigate every step of the process.
            </Typography>
            <Stack spacing={2}>
              {CONTACT_DETAILS.map((detail) => (
                <Stack alignItems="center" direction="row" key={detail.label} spacing={2}>
                  {detail.icon}
                  <Typography itemProp={detail.label.toLowerCase()} variant="body1">
                    {detail.value}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid size={{ lg: 5, md: 6, xs: 12 }}>
            <Paper sx={{ borderRadius: 2, p: 4 }}>
              <Typography
                sx={{ color: 'text.primary', fontWeight: 500, mb: 3 }}
                tabIndex={0}
                variant="h6"
              >
                Contact Us,{' '}
                <mark
                  style={{
                    backgroundColor: 'transparent',
                    color: 'var(--mui-palette-quaternary-main)',
                    fontWeight: 600,
                  }}
                >
                  Today!
                </mark>
              </Typography>
              <React.Suspense fallback={null}>
                <LeadForm />
              </React.Suspense>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
