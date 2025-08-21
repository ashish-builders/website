'use client';

import * as React from 'react';
import Box, { type BoxProps } from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { safeImageUri } from '@/lib/image';
import { VideoPlay } from '../icons/video-play';
import { YoutubeLightbox } from './youtube-lightbox';
import { Image } from '../image/image';
import { VideoPlayOutlined } from '../icons/video-play-outlined';

interface YoutubeLightboxPlayerProps {
  'aria-label'?: string;
  borderRadius?: number | string;
  disableLightboxOnMobile?: boolean;
  height?: BoxProps['height'];
  iconSize?: number;
  iconStyle?: 'default' | 'outlined';
  videoId: string;
  width?: number | string;
}

export function YoutubeLightboxPlayer(props: YoutubeLightboxPlayerProps) {
  const {
    'aria-label': ariaLabel,
    borderRadius,
    disableLightboxOnMobile = true,
    height,
    iconSize = 48,
    iconStyle = 'default',
    videoId,
    width,
  } = props;

  const theme = useTheme();

  // ─── State ───────────────────────────────────────────────────────────
  const [lightboxOpen, setLightboxOpen] = React.useState(false);

  const videoThumbnail = safeImageUri(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);

  // ─── Callbacks ───────────────────────────────────────────────────────
  const handleOpenLightbox = React.useCallback(() => {
    if (
      disableLightboxOnMobile &&
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia(`(max-width: ${theme.breakpoints.values.sm}px)`).matches
    ) {
      window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
    } else {
      setLightboxOpen(true);
    }
  }, [disableLightboxOnMobile, theme.breakpoints.values.sm, videoId]);

  const handleCloseLightbox = React.useCallback(() => setLightboxOpen(false), []);
  const handleKeyDown = React.useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setLightboxOpen(true);
    }
  }, []);

  if (!videoThumbnail) {
    return null;
  }

  return (
    <Box
      sx={{
        borderRadius,
        height,
        isolation: 'isolate',
        overflow: 'hidden',
        width,
      }}
      position="relative"
    >
      <Image
        sx={{
          borderRadius: 1,
          display: 'block',
          margin: 0,
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        alt="Youtube video thumbnail"
        loading="lazy"
        priority={false}
        quality={100}
        src={videoThumbnail}
        fill
      />
      <Box
        sx={{
          backgroundColor: 'common.black',
          bottom: 0,
          left: 0,
          opacity: 0.5,
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: 1,
        }}
        aria-hidden="true"
      />
      <Box
        sx={{
          '& svg': {
            '&:hover': {
              transform: 'scale(1.1)',
            },
            transition: 'transform 0.3s ease',
          },
          alignItems: 'center',
          bottom: 0,
          color: 'common.white',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: 2,
        }}
        aria-label={ariaLabel}
        onClick={handleOpenLightbox}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      >
        {iconStyle === 'outlined' ? (
          <VideoPlayOutlined color="inherit" height={iconSize} width={iconSize} />
        ) : (
          <VideoPlay color="inherit" height={iconSize} width={iconSize} />
        )}
      </Box>
      <React.Suspense fallback={null}>
        <YoutubeLightbox onClose={handleCloseLightbox} open={lightboxOpen} videoId={videoId} />
      </React.Suspense>
    </Box>
  );
}
