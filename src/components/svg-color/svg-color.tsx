import { styled, type Theme, type SxProps } from '@mui/material/styles';
import * as React from 'react';

const SvgRoot = styled('span')(() => ({
  backgroundColor: 'currentColor',
  display: 'inline-flex',
  flexShrink: 0,
  height: 24,
  width: 24,
}));

export type SvgColorProps = React.ComponentProps<'span'> & {
  src: string;
  sx?: SxProps<Theme>;
};

export function SvgColor({ className, src, sx, ...other }: SvgColorProps) {
  return (
    <SvgRoot
      sx={[
        {
          mask: `url(${src}) no-repeat center / contain`,
          WebkitMask: `url(${src}) no-repeat center / contain`,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={className}
      {...other}
    />
  );
}
