'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Fade } from '@/components/motion/fade/fade';
import { groupBy } from 'es-toolkit';
import { facebook, x, instagram, linkedin, youtube } from '@/constants/social-constants';
import { phoneNumber, email } from '@/constants/contact-constants';
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
    value: 'Opp. Govt Hospital, Ramnagar Road, Kashipur, Uttarakhand',
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

type ContactItemProps = {
  icon: React.ReactNode;
  name: string;
  value: string;
};

function ContactItem({ icon, name, value }: ContactItemProps) {
  const contactHref = getContactHref(name, value);
  const itemProp = getItemProp(name);
  return (
    <Stack
      alignItems="center"
      direction="row"
      key={name}
      spacing={1}
      textAlign={{ lg: 'left', xs: 'center' }}
    >
      {icon}
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
            {...getContactLinkProps(name, itemProp)}
          >
            {value}
          </a>
        ) : (
          value
        )}
      </Typography>
    </Stack>
  );
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
            {/* Contact Info */}
            <Stack
              alignItems="center"
              component="address"
              direction={{ lg: 'row', xs: 'column' }}
              itemType="https://schema.org/Organization"
              justifyContent="space-between"
              spacing={2}
              sx={{ fontSize: '0.875rem' }}
              itemScope
            >
              <ContactItem {...grouped.default[0]} />
              <Stack
                alignItems="center"
                component="address"
                direction={{ lg: 'row', xs: 'column' }}
                spacing={2}
                sx={{ fontSize: '0.875rem' }}
              >
                <ContactItem {...grouped.default[1]} />
                <ContactItem {...grouped.default[2]} />
              </Stack>
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
