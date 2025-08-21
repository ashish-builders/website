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

const contactInfo = [
  {
    icon: <Facebook height={24} width={24} brandColor />,
    name: 'Facebook',
    type: 'social',
    value: facebook,
  },
  {
    icon: <TwitterX height={24} width={24} brandColor />,
    name: 'X',
    type: 'social',
    value: x,
  },
  {
    icon: <Instagram height={24} width={24} brandColor />,
    name: 'Instagram',
    type: 'social',
    value: instagram,
  },
  {
    icon: <Linkedin height={24} width={24} brandColor />,
    name: 'LinkedIn',
    type: 'social',
    value: linkedin,
  },
  {
    icon: <Youtube height={24} width={24} brandColor />,
    name: 'Youtube',
    type: 'social',
    value: youtube,
  },

  {
    icon: <LocationOnOutlinedIcon fontSize="large" />,
    name: 'Address',
    type: 'default',
    value: address,
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

// Utility: get itemProp for schema.org
const getItemProp = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes('phone')) {
    return 'telephone';
  }
  if (lower.includes('email')) {
    return 'email';
  }
  if (lower.includes('address')) {
    return 'address';
  }
  return undefined;
};

// Utility: is address
const isAddress = (name: string) => name.toLowerCase().includes('address');

// Utility: get link props for contact
const getContactLinkProps = (
  name: string,
  itemProp: string | undefined,
): React.AnchorHTMLAttributes<HTMLAnchorElement> & { itemProp?: string } => {
  const props: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    itemProp?: string;
  } = {};
  if (itemProp) {
    props.itemProp = itemProp;
  }
  if (isAddress(name)) {
    props.target = '_blank';
    props.rel = 'noopener noreferrer';
  }
  return props;
};

function getContactHref(name: string, value: string) {
  if (name.toLowerCase().includes('phone')) {
    return `tel:${value}`;
  }
  if (name.toLowerCase().includes('email')) {
    return `mailto:${value}`;
  }
  if (name.toLowerCase().includes('address')) {
    // Encode the address for use in a Google Maps search URL
    const encoded = encodeURIComponent(`Ashish Builders & Developers, ${value}`);
    return `https://www.google.com/maps/search/?api=1&query=${encoded}`;
  }
  if (value.startsWith('http')) {
    return value;
  }
  return undefined;
}

export function Footer() {
  const grouped = groupBy(contactInfo, (item) => item.type);

  return (
    <Box aria-label="Site footer" component="footer" sx={{ pb: 6, pt: 8 }}>
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
            <Stack
              alignItems="center"
              direction={{ lg: 'row', xs: 'column' }}
              justifyContent="space-between"
              spacing={4}
            >
              {/* Contact Info */}
              <Stack
                alignItems="center"
                component="address"
                direction={{ lg: 'row', xs: 'column' }}
                itemType="https://schema.org/Organization"
                spacing={2}
                sx={{ fontSize: '0.875rem' }}
                itemScope
              >
                {grouped.default?.map((item) => {
                  const contactHref = getContactHref(item.name, item.value);
                  const itemProp = getItemProp(item.name);
                  const linkProps = getContactLinkProps(item.name, itemProp);
                  return (
                    <Stack
                      alignItems="center"
                      direction="row"
                      key={item.name}
                      spacing={1}
                      textAlign={{ lg: 'left', xs: 'center' }}
                    >
                      {item.icon}
                      <Typography
                        component="span"
                        fontWeight={500}
                        sx={{ fontStyle: 'normal' }}
                        textTransform="none"
                        variant="body1"
                        {...(itemProp ? { itemProp } : {})}
                      >
                        {contactHref ? (
                          <a
                            href={contactHref}
                            style={{ color: 'inherit', textDecoration: 'none' }}
                            {...linkProps}
                          >
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </Typography>
                    </Stack>
                  );
                })}
              </Stack>

              {/* Social Media Icons */}
              {grouped.social && (
                <Stack
                  alignItems="center"
                  aria-label="Social media links"
                  direction="row"
                  itemType="https://schema.org/Organization"
                  role="navigation"
                  spacing={1}
                  itemScope
                >
                  {grouped.social.map((item) => (
                    <IconButton
                      sx={{
                        border: 1,
                        borderColor: 'common.black',
                        borderRadius: '50%',
                        fontSize: 14,
                        fontWeight: 700,
                        height: 40,
                        transition: 'all 0.2s',
                        width: 40,
                      }}
                      aria-label={item.name}
                      component="a"
                      href={item.value}
                      itemProp="sameAs"
                      key={item.name}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.icon}
                    </IconButton>
                  ))}
                </Stack>
              )}
            </Stack>

            <Divider sx={{ bgcolor: 'common.black', my: 3 }} />
            <Typography align="center" color="textPrimary" fontWeight={500} variant="body1">
              Copyright &copy; {new Date().getFullYear()} Ashish Builders, All rights reserved.
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}
