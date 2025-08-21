'use client';

import Box from '@mui/material/Box';
import { useIsomorphicLayoutEffect } from 'motion/react';
import * as React from 'react';

export interface SlideRailItemProps {
  anchor?: 'left' | 'right';
  'aria-label'?: string;
  children: React.ReactNode;
  defaultWidth?: number;
  icon: React.ReactNode;
}

export function SlideRailItem(props: SlideRailItemProps) {
  const { anchor = 'right', 'aria-label': ariaLabel, children, defaultWidth = 0, icon } = props;
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [width, setWidth] = React.useState(defaultWidth);
  const contentId = React.useId();

  // Determine positioning based on anchor prop
  const positionStyles =
    anchor === 'right'
      ? {
          borderBottomLeftRadius: 2,
          borderBottomRightRadius: 0,
          borderTopLeftRadius: 2,
          borderTopRightRadius: 0,
          left: 'auto',
          right: 0,
        }
      : {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 2,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 2,
          left: 0,
          right: 'auto',
        };

  // Slide direction based on anchor
  let slideTransform: string;
  if (isExpanded) {
    slideTransform = 'translateX(0)';
  } else if (anchor === 'right') {
    slideTransform = `translateX(var(--slide-rail-width))`;
  } else {
    slideTransform = `translateX(calc(-1 * var(--slide-rail-width)))`;
  }

  // Keyboard accessibility: treat as button
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setIsExpanded(true);
    }
    if (event.key === 'Escape') {
      setIsExpanded(false);
    }
  };

  useIsomorphicLayoutEffect(() => {
    if (contentRef.current) {
      setWidth(contentRef.current.offsetWidth);
    }
  }, []);

  return (
    <Box
      style={
        {
          '--slide-rail-width': `${width}px`,
        } as React.CSSProperties
      }
      sx={{
        '&:focus': {
          outlineColor: 'var(--mui-palette-tertiary-contrastText)',
        },
        '&:hover, &:focus': {
          borderColor: 'none',
        },
        alignItems: 'center',
        backgroundColor: 'var(--mui-palette-tertiary-main)',
        border: '1px solid transparent',
        color: 'var(--mui-palette-tertiary-contrastText)',
        display: 'flex',
        flexDirection: 'row',
        outline: '2px solid transparent',
        padding: 1,
        pointerEvents: 'auto',
        position: 'relative',
        transform: slideTransform,
        transition: 'transform 0.3s ease-in-out',
        ...positionStyles,
      }}
      aria-describedby={contentId}
      aria-expanded={isExpanded}
      aria-label={ariaLabel}
      onBlur={() => setIsExpanded(false)}
      onFocus={() => setIsExpanded(true)}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      role="button"
      tabIndex={0}
    >
      <Box sx={{ display: 'inline-flex' }}>{icon}</Box>
      <Box
        style={{
          alignItems: 'center',
          display: 'flex',
          overflow: 'hidden',
          paddingLeft: '8px',
          whiteSpace: 'nowrap',
        }}
        id={contentId}
        ref={contentRef}
      >
        {children}
      </Box>
    </Box>
  );
}
