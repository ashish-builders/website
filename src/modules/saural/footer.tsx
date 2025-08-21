import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { Image } from '@/components/image/image';
import { IconButton, Stack } from '@mui/material';
import { phoneNumber } from '@/constants/contact-constants';
import { Facebook } from '@/components/icons/facebook';
import { TwitterX } from '@/components/icons/twitter-x';
import { Instagram } from '@/components/icons/instagram';
import { Linkedin } from '@/components/icons/linkedin';
import { Youtube } from '@/components/icons/youtube';
import { facebook, instagram, linkedin, x, youtube } from '@/constants/social-constants';

const socialInfo = [
  {
    icon: <Facebook height={24} width={24} />,
    name: 'Facebook',
    type: 'social',
    value: facebook,
  },
  {
    icon: <TwitterX height={24} width={24} />,
    name: 'X',
    type: 'social',
    value: x,
  },
  {
    icon: <Instagram height={24} width={24} />,
    name: 'Instagram',
    type: 'social',
    value: instagram,
  },
  {
    icon: <Linkedin height={24} width={24} />,
    name: 'LinkedIn',
    type: 'social',
    value: linkedin,
  },
  {
    icon: <Youtube height={24} width={24} />,
    name: 'Youtube',
    type: 'social',
    value: youtube,
  },
];

export function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: 'quinary.main',
        isolation: 'isolate',
      }}
      position="relative"
    >
      <Image
        style={{
          filter: 'brightness(0.7)',
          objectFit: 'cover',
          pointerEvents: 'none',
        }}
        alt="Saural Villa Corbett Background"
        aria-hidden="true"
        loading="lazy"
        src="/assets/projects/other/saural-villa-corbett/card-background-1.webp"
        fill
      />
      <Container maxWidth="lg" sx={{ pb: 3, position: 'relative', pt: 6, zIndex: 1 }}>
        <Grid spacing={2} container>
          <Grid size={{ md: 'grow', xs: 12 }}>
            <Image
              sx={{
                display: 'block',
                height: 'auto',
                margin: { md: '0', xs: '0 auto' },
                maxWidth: '100%',
                objectFit: 'contain',
              }}
              alt="Saural Villa Corbett Logo"
              height={200}
              loading="lazy"
              priority={false}
              src="/assets/projects/logo/saural-villa-corbett/logo.svg"
              width={200}
            />
          </Grid>
          <Grid alignSelf="center" justifySelf="center" size={{ md: 'grow', xs: 12 }}>
            <Typography
              sx={{
                color: 'common.white',
                fontFamily: 'var(--font-saural)',
                fontSize: '2rem',
                mx: 'auto',
                textAlign: 'center',
                width: 'fit-content',
              }}
              variant="body1"
            >
              Step into timeless living
            </Typography>
          </Grid>
          <Grid
            alignSelf="center"
            justifySelf={{ md: 'flex-end', xs: 'center' }}
            size={{ md: 'grow', xs: 12 }}
          >
            <Typography
              sx={{
                color: 'common.white',
                fontFamily: 'var(--font-saural)',
                fontSize: '1rem',
                ml: { md: 'auto', xs: 'auto' },
                mr: { md: '0', xs: 'auto' },
                textAlign: { md: 'right', xs: 'center' },
                width: 'fit-content',
              }}
              variant="body1"
            >
              Contact Us
            </Typography>
            <Typography
              sx={{
                color: 'common.white',
                fontFamily: 'var(--font-saural)',
                fontSize: '2rem',
                ml: { md: 'auto', xs: 'auto' },
                mr: { md: '0', xs: 'auto' },
                textAlign: { md: 'right', xs: 'center' },
                width: 'fit-content',
              }}
              variant="body1"
            >
              {phoneNumber.replace(/^\+91(\d{2})(\d{3})(\d{4})$/, '+91 $1 $2 $3')}
            </Typography>
          </Grid>
        </Grid>
        <Stack
          alignItems="center"
          direction={{ md: 'row', xs: 'column' }}
          mt={2}
          spacing={2}
          useFlexGap
        >
          <Typography
            sx={{
              color: 'var(--mui-palette-common-white)',
            }}
            variant="body1"
          >
            © 2025 All Rights Reserved | Ashish Builders and Developers
          </Typography>
          <Divider
            sx={{
              borderColor: 'var(--mui-palette-common-white)',
              display: { md: 'block', xs: 'none' },
              flexGrow: 1,
            }}
          />
          <Stack direction="row" spacing={0.5}>
            {socialInfo.map((item) => (
              <IconButton
                aria-label={item.name}
                component="a"
                href={item.value}
                key={item.name}
                rel="noopener noreferrer"
                sx={{ color: 'common.white' }}
                target="_blank"
              >
                {item.icon}
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
