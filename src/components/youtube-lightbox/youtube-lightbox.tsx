'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog, { dialogClasses } from '@mui/material/Dialog';
import { type SxProps, type Theme } from '@mui/material/styles';
import deepmerge from '@mui/utils/deepmerge';

interface YoutubeLightboxProps {
  /**
   * Optional className for custom styling.
   */
  className?: string;
  /**
   * Optional callback when the lightbox is closed.
   */
  onClose?: () => void;
  /**
   * Optional callback when the lightbox close transition is completed.
   */
  onExited?: () => void;
  /**
   * Whether the lightbox is open.
   */
  open: boolean;
  /**
   * Optional sx prop for custom styling on the Modal root.
   */
  sx?: SxProps<Theme>;
  /**
   * The YouTube video ID to display in the lightbox.
   */
  videoId: string;
}

export function YoutubeLightbox(props: YoutubeLightboxProps) {
  const { className, onClose, onExited, open, sx, videoId } = props;

  return (
    <Dialog
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          },
        },
        paper: {
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            maxHeight: 'none',
            maxWidth: 'none',
            overflow: 'visible',
            position: 'static',
          },
        },
        transition: {
          onExited,
          unmountOnExit: true,
        },
      }}
      sx={deepmerge(
        {
          [`& .${dialogClasses.container}`]: {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          },
        },
        sx,
      )}
      aria-describedby="youtube-lightbox-description"
      aria-labelledby="youtube-lightbox-title"
      className={className}
      maxWidth={false}
      onClose={onClose}
      open={open}
      disableEnforceFocus
    >
      <Box display="contents">
        <IconButton
          sx={{
            '&:hover': { background: 'rgba(0,0,0,0.5)' },
            background: 'rgba(0,0,0,0.3)',
            color: '#fff',
            position: 'absolute',
            right: 8,
            top: 8,
            zIndex: 2,
          }}
          aria-label="Close video dialog"
          onClick={onClose}
          autoFocus
        >
          <CloseIcon fontSize="large" />
        </IconButton>

        <Box
          sx={{
            alignItems: 'center',
            aspectRatio: '16/9',
            background: '#000',
            borderRadius: 2,
            boxShadow: 24,
            display: 'flex',
            justifyContent: 'center',
            maxWidth: '98vw',
            outline: 'none',
            position: 'relative',
            width: { sm: 800, xs: '90vw' },
            zIndex: 'calc(var(--mui-zIndex-modal) + 1)',
          }}
        >
          <Box
            sx={{
              background: '#000',
              border: 0,
              borderRadius: 2,
              height: '100%',
              width: '100%',
            }}
            allow="autoplay; encrypted-media"
            component="iframe"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`}
            title="YouTube video player"
            allowFullScreen
          />
        </Box>
      </Box>
    </Dialog>
  );
}
