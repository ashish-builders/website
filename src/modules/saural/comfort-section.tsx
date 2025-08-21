import * as React from 'react';
import { Image } from '@/components/image/image';
import { HoverScale } from '@/components/motion/hover-scale/hover-scale';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function ComfortSection() {
  return (
    <Box position="relative" py={16}>
      <Box
        sx={{
          backgroundColor: 'color-mix(in srgb, var(--mui-palette-quaternary-light) 15%, white 85%)',
          bottom: -24,
          left: { md: '60%', sm: '70%', xs: '80%' },
          position: 'absolute',
          right: 24,
          top: -24,
        }}
      />
      <HoverScale
        sx={{
          bottom: 0,
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
        }}
        aria-hidden="true"
      >
        <Image
          style={{
            objectFit: 'cover',
          }}
          alt="Comfort Living"
          aria-hidden="true"
          blurDataURL="data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAbEAACAQUAAAAAAAAAAAAAAAAAAQMCERIiUf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AjxxZurZq3AAQf//Z"
          placeholder="blur"
          sizes="100vw"
          src="/assets/projects/other/saural-villa-corbett/saural-comfort.webp"
          fill
        />
      </HoverScale>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          minHeight: 320,
          pointerEvents: 'none',
          position: 'relative',
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        <Typography
          sx={{
            color: 'var(--mui-palette-common-white)',
            fontFamily: 'var(--font-saural)',
            fontSize: { sm: '2.5rem', xs: '2.15rem' },
            letterSpacing: 1,
            lineHeight: 1.2,
            maxWidth: 640,
            mx: 'auto',
          }}
          variant="h2"
        >
          We Take Pride in Providing You Comfort.
        </Typography>
      </Box>
    </Box>
  );
}
