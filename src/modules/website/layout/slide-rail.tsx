import * as React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import Email from '@mui/icons-material/Email';
import Box from '@mui/material/Box';
import { Link } from '@/components/link/link';
import Portal from '@mui/material/Portal';
import { SlideRailItem, SlideRailItemProps } from './slide-rail-item';

const items: SlideRailItemProps[] = [
  {
    anchor: 'right',
    'aria-label': 'Call Ashish Builders',
    children: (
      <Link color="inherit" href="tel:+918057977777" underline="none">
        +91 80 579 77777
      </Link>
    ),
    defaultWidth: 135,
    icon: <PhoneIcon />,
  },
  {
    anchor: 'right',
    'aria-label': 'Email Ashish Builders',
    children: (
      <Link color="inherit" href="mailto:info@ashishbuilders.com" underline="none">
        info@ashishbuilders.com
      </Link>
    ),
    defaultWidth: 188,
    icon: <Email />,
  },
];

export function SlideRail() {
  return (
    <Portal>
      <Box
        sx={{
          alignItems: 'flex-end',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          pointerEvents: 'none',
          position: 'fixed',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 'var(--mui-zIndex-fab)',
        }}
      >
        {items.map((item, idx) => (
          <SlideRailItem key={idx} {...item} />
        ))}
      </Box>
    </Portal>
  );
}
