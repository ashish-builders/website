import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import * as React from 'react';

const contactDetails: {
  href?: string;
  icon: React.ReactNode;
  itemProp: string;
  label: string;
  lines: React.ReactNode[];
}[] = [
  {
    href: 'tel:+91918057977777',
    icon: <PhoneIcon sx={{ color: 'common.white' }} />,
    itemProp: 'telephone',
    label: 'Phone',
    lines: [
      <Typography
        aria-label="Call +91 91 80 579 77777"
        color="text.secondary"
        component="a"
        href="tel:+91918057977777"
        itemProp="telephone"
        key="phone"
        rel="noopener noreferrer"
        sx={{ textDecoration: 'none' }}
      >
        +91 91 80 579 77777
      </Typography>,
    ],
  },
  {
    href: 'mailto:sales@ashishbuilders.com',
    icon: <EmailIcon sx={{ color: 'common.white' }} />,
    itemProp: 'email',
    label: 'Email',
    lines: [
      <Typography
        aria-label="Email sales@ashishbuilders.com"
        color="text.secondary"
        component="a"
        href="mailto:sales@ashishbuilders.com"
        itemProp="email"
        key="email"
        rel="noopener noreferrer"
        sx={{ textDecoration: 'none' }}
      >
        sales@ashishbuilders.com
      </Typography>,
    ],
  },
  {
    href: 'https://www.google.com/maps/search/?api=1&query=Ashish%20Builders%20%26%20Developers%2C%20Cheema%20Chauraha%2C%20Ramnagar%20Road%2C%20Kashipur%2C%20Uttarakhand',
    icon: <LocationOnIcon sx={{ color: 'common.white' }} />,
    itemProp: 'address',
    label: 'Office Address',
    lines: [
      <Typography
        aria-label="View address on Google Maps"
        color="text.secondary"
        component="a"
        href="https://www.google.com/maps/search/?api=1&query=Ashish%20Builders%20%26%20Developers%2C%20Cheema%20Chauraha%2C%20Ramnagar%20Road%2C%20Kashipur%2C%20Uttarakhand"
        itemProp="address"
        key="address"
        rel="noopener noreferrer"
        sx={{ fontStyle: 'normal', textDecoration: 'none' }}
        target="_blank"
      >
        Ashish Builders & Developers, Cheema Chauraha, Ramnagar Road, Kashipur, Uttarakhand
      </Typography>,
    ],
  },
];

export function GetInTouch() {
  return (
    <Stack height="100%" justifyContent="center" spacing={3}>
      <Box>
        <Typography color="quaternary" fontWeight={600} mb={2} variant="h5">
          Get in Touch
        </Typography>
        <Typography color="text.secondary" mb={3}>
          Our team is here to help you find the perfect property. Reach out to us through any of the
          following channels.
        </Typography>
      </Box>
      <Stack spacing={3}>
        {contactDetails.map((detail) => (
          <Paper
            itemType={
              detail.label === 'Office Address'
                ? 'https://schema.org/PostalAddress'
                : 'https://schema.org/ContactPoint'
            }
            sx={{
              '&:hover': {
                transform: 'translateY(-2px) scale(1.01)',
              },
              alignItems: 'flex-start',
              display: 'flex',
              gap: 2,
              p: 3,
              transition: 'box-shadow 0.2s, transform 0.2s',
            }}
            aria-label={detail.label}
            elevation={2}
            key={detail.label}
            role="region"
            itemScope
          >
            <Box
              alignItems="center"
              aria-hidden="true"
              bgcolor="error.main"
              borderRadius={2}
              display="flex"
              p={1.5}
            >
              {detail.icon}
            </Box>
            <Box>
              <Typography
                color="quaternary"
                component="span"
                fontWeight={600}
                sx={{ display: 'block' }}
              >
                {detail.label}
              </Typography>
              {detail.lines}
            </Box>
          </Paper>
        ))}
      </Stack>
    </Stack>
  );
}
