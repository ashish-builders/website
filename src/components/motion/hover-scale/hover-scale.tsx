import { type SxProps, type Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import * as React from 'react';
import deepmerge from '@mui/utils/deepmerge';

export interface HoverScaleProps {
  children: React.ReactNode;
  duration?: string;
  height?: number | string;
  scaleValue?: number;
  style?: React.CSSProperties;
  sx?: SxProps<Theme>;
}

const defaultSx = {
  '&>*': {
    '&:hover': {
      transform: 'scale(var(--hover-scale-value, 1.05))',
    },
    transform: 'scale(1)',
    transformOrigin: 'center',
    transition: 'transform var(--hover-scale-duration, 0.3s) ease-in-out',
  },
  display: 'inline-block',
  isolation: 'isolate',
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
} as const;

export function HoverScale({
  children,
  duration = '0.3s',
  height,
  scaleValue = 1.05,
  style,
  sx,
}: HoverScaleProps) {
  const mergedSx = React.useMemo(() => {
    return sx ? deepmerge(defaultSx, sx) : defaultSx;
  }, [sx]);

  const mergedStyle = React.useMemo(
    () => ({
      '--hover-scale-duration': duration,
      '--hover-scale-value': scaleValue,
      height,
      ...style,
    }),
    [height, style, scaleValue, duration],
  );

  return (
    <Box component="span" style={mergedStyle} sx={mergedSx}>
      {children}
    </Box>
  );
}
