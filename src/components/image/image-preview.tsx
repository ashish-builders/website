'use client';

import * as React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import useObjectURL from '@/hooks/utils/use-object-url';

interface ImagePreviewProps {
  disabled?: boolean;
  file: File | null;
  onRemove: () => void;
}

export function ImagePreview({ disabled = false, file, onRemove }: ImagePreviewProps) {
  const { objectURL: previewUrl } = useObjectURL(file);

  if (!file || !previewUrl) {
    return null;
  }

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        display: 'inline-block',
        maxWidth: 300,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'block',
          height: 'auto',
          maxHeight: 300,
          objectFit: 'cover',
          width: '100%',
        }}
        alt="Preview"
        component="img"
        src={previewUrl}
      />

      <Box
        sx={{
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          bottom: 0,
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          left: 0,
          padding: 1,
          position: 'absolute',
          right: 0,
        }}
      >
        <Typography sx={{ flex: 1 }} variant="caption" noWrap>
          {file.name}
        </Typography>

        <IconButton
          sx={{
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
            color: 'white',
          }}
          disabled={disabled}
          onClick={onRemove}
          size="small"
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}
