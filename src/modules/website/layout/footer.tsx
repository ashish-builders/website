'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Fade } from '@/components/motion/fade/fade';
import { groupBy } from 'es-toolkit';
import { facebook, x, instagram, linkedin, youtube } from '@/constants/social-constants';
import { address, phoneNumber, email } from '@/constants/contact-constants';
import { Facebook } from '@/components/icons/facebook';
import { TwitterX } from '@/components/icons/twitter-x';
import { Instagram } from '@/components/icons/instagram';
import { Linkedin } from '@/components/icons/linkedin';
import { Youtube } from '@/components/icons/youtube';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import Link from 'next/link';

const contactInfo = [
  // Social
  { icon: <Facebook height={24} width={24} brandColor />, name: 'Facebook', type: 'social', value: facebook },
  { icon: <TwitterX height={24} width={24} brandColor />, name: 'X', type: 'social', value: x },
  { icon: <Instagram height={24} width={24} brandColor />, name: 'Instagram', type: 'social', value: instagram },
  { icon: <Linkedin height={24} width={24} brandColor />, name: 'LinkedIn', type: 'social', value: linkedin },
  { icon: <Youtube height={24} width={24} brandColor />, name: 'Youtube', type: 'social', value: youtube },

  // Main row (ORDER MATTERS)
  {
    icon: <LocationOnOutlinedIcon fontSize="large" />,
    name: 'Address',
    type: 'default',
    value: address,
  },
  {
    icon: null,
    name: 'Privacy Policy',
    type: 'default',
    value: '/privacy-policy',
  },
  {
    icon: <PhoneInTalkOutlinedIcon fontSize="large" />,
    name: 'Phone Number',
    type: 'default',
    value: phoneNumber,
  },
  {
    icon: <EmailOutlinedIcon fontSize="large" />,
    name: 'Email',
    type: 'default',
    value: email,
  },
];

function getContactHref(name: string, value: string) {
  if (name === 'Privacy Policy') return value;
  if (name.toLowerCase().includes('phone')) return `tel:${value}`;
  if (name.toLowerCase().includes('email')) return `mailto:${value}`;
  if (name.toLowerCase().includes('address')) {
    const encoded = encodeURIComponent(`Ashish Builders & Developers, ${value}`);
    return `https://www.google.com/maps/search/?api=1&query=${encoded}`;
  }
  if (value.startsWith('http')) return value;
  return undefined;
}

export function Footer() {
  const grouped = groupBy(contactInfo, (item) => item.type);

  return (
    <Box component="footer" sx={{ pb: 6, pt: 8 }}>
      <Container maxWidth="lg">
        <Fade>
          <Box
            sx={{
              bgcolor: 'color-mix(in srgb, var(--mui-palette-quaternary-main) 25%, white 75%)',
              borderRadius: 6,
              px: 4,
              py: 4,
            }}
          >
            {/* TOP ROW */}
            <Stack
              direction={{ lg: 'row', xs: 'column' }}
              alignItems="center"
              justifyContent="space-between"
              spacing={4}
            >
              {/* Address | Privacy | Phone | Email */}
              <Stack
                direction={{ lg: 'row', xs: 'column' }}
                spacing={3}
                alignItems="center"
              >
                {grouped.default?.map((item) => {
                  const href = getContactHref(item.name, item.value);

                  return (
                    <Stack key={item.name} direction="row" spacing={1} alignItems="center">
                      {item.icon && item.icon}
                       <Typography fontWeight={500} variant="body1">
                        {href ? (
                          item.name === 'Privacy Policy' ? (
                            <Link href={href} style={{ color: 'inherit', textDecoration: 'none' }}>
                              Privacy Policy
                            </Link>
                          ) : (
                            <a href={href} style={{ color: 'inherit', textDecoration: 'none' }}>
                              {item.value}
                            </a>
                          )
                        ) : (
                          item.value
                        )}
                      </Typography>
                    </Stack>
                  );
                })}
              </Stack>

              {/* Social Icons */}
              <Stack direction="row" spacing={1}>
                {grouped.social?.map((item) => (
                  <IconButton
                    key={item.name}
                    component="a"
                    href={item.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      border: 1,
                      borderColor: 'common.black',
                      width: 40,
                      height: 40,
                    }}
                  >
                    {item.icon}
                  </IconButton>
                ))}
              </Stack>
            </Stack>

            <Divider sx={{ bgcolor: 'common.black', my: 3 }} />

            {/* COPYRIGHT */}
            <Typography align="center" fontWeight={500}>
              Copyright © {new Date().getFullYear()} Ashish Builders, All rights reserved.
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}
 