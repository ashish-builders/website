'use client';

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { useTheme, alpha, keyframes } from '@mui/material/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { YoutubeLightboxProvider } from '@/components/youtube-lightbox/youtube-lightbox-provider';
import { useYoutubeLightbox } from '@/components/youtube-lightbox/use-youtube-lightbox';

const ripple = keyframes`
0% {
    transform: scale(1);
    opacity: 0;
}

30% {
    opacity: 0.4;
}
100% {
    transform: scale(1.8);
    opacity: 0;
}
`;

function VideoPlayButtonComponent() {
  const theme = useTheme();
  const youtubeLightbox = useYoutubeLightbox();
  return (
    <IconButton
      onClick={() => {
        youtubeLightbox.open('MI98LIp9cFg');
      }}
      sx={{
        '&::before': {
          animation: `${ripple} 2s infinite`,
          border: `1px solid ${theme.palette.common.white}`,
          borderRadius: '50%',
          bottom: 0,
          content: '""',
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
          transition: 'all ease 0.4s',
          zIndex: -1,
        },
        '&:hover': {
          '& svg': {
            color: theme.palette.tertiary.main,
          },
          backgroundColor: theme.palette.common.white,
        },
        '& svg': {
          color: theme.palette.common.white,
        },
        backgroundColor: alpha(theme.palette.common.white, 0.2),
        boxShadow: 2,
        height: 92,
        width: 92,
      }}
      aria-label="Play Video"
    >
      <PlayArrowIcon
        sx={{
          fontSize: 40,
        }}
      />
    </IconButton>
  );
}

export function VideoPlayButton() {
  return (
    <YoutubeLightboxProvider>
      <VideoPlayButtonComponent />
    </YoutubeLightboxProvider>
  );
}
