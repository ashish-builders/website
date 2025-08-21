import * as React from 'react';
import { Image } from '@/components/image/image';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export function HeroSection() {
  return (
    <Box
      sx={{
        height: '100vh',
        isolation: 'isolate',
        position: 'relative',
        width: '100%',
      }}
    >
      <Image
        alt="Banner"
        loading="eager"
        src="/assets/projects/other/saural-villa-corbett/banner.webp"
        sx={{ filter: 'brightness(0.5)', objectFit: 'cover', zIndex: -1 }}
        fill
        priority
      />
      <Box
        sx={{
          height: '100%',
          pt: 30,
          px: 4,
          width: '100%',
        }}
      >
        <Typography
          sx={{
            color: 'common.white',
            fontFamily: 'var(--font-saural)',
            textAlign: 'right',
          }}
          variant="h3"
        >
          Where adventure greets
          <br />
          you at your doorstep
        </Typography>
        <Box
          sx={{
            bottom: 0,
            left: '50%',
            position: 'absolute',
            transform: 'translate(-50%)',
            zIndex: 1,
          }}
        >
          <svg
            fill="none"
            height={100}
            viewBox="0 0 8 100"
            width={8}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.121.005.586 3.541 4.12 7.076l3.536-3.535L4.121.005ZM3.633 17.08h1v100h-1z"
              fill="#fff"
            />
          </svg>
        </Box>
      </Box>
    </Box>
  );
}
