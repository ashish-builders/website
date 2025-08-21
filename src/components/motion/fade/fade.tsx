'use client';

import * as React from 'react';
import { motion, useInView, useReducedMotion, type HTMLMotionProps } from 'motion/react';

import useForkRef from '@mui/utils/useForkRef';

type FadeDirection =
  | 'down'
  | 'down-left'
  | 'down-right'
  | 'left'
  | 'right'
  | 'up'
  | 'up-left'
  | 'up-right';

interface FadeProps extends HTMLMotionProps<'span'> {
  ariaLabel?: string;
  ariaLive?: React.AriaAttributes['aria-live'];
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: FadeDirection;
  distance?: number;
  duration?: number;
  once?: boolean;
  reduceMotion?: boolean;
  skipAnimation?: boolean;
  style?: React.CSSProperties;
  tabIndex?: number;
}

const directionMap: Record<FadeDirection, { x: number; y: number }> = {
  down: { x: 0, y: -1 },
  'down-left': { x: 1, y: -1 },
  'down-right': { x: -1, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  up: { x: 0, y: 1 },
  'up-left': { x: 1, y: 1 },
  'up-right': { x: -1, y: 1 },
};

export const Fade = React.forwardRef<HTMLSpanElement, FadeProps>(function Fade(
  {
    ariaLabel,
    ariaLive,
    children,
    className,
    delay = 0,
    direction = 'up',
    distance = 60,
    duration = 600,
    once = true,
    reduceMotion,
    skipAnimation = false,
    style,
    tabIndex,
    ...rest
  },
  ref,
) {
  const innerRef = React.useRef<HTMLSpanElement>(null);
  const forkedRef = useForkRef(ref, innerRef);
  const inView = useInView(innerRef, {
    amount: 0.1,
    once,
  });
  const systemReducedMotion = useReducedMotion();

  const shouldReduceMotion = reduceMotion || systemReducedMotion || skipAnimation;
  const { x, y } = directionMap[direction];

  const initialY = shouldReduceMotion ? 0 : y * distance;
  const initialX = shouldReduceMotion ? 0 : x * distance;
  const initialOpacity = skipAnimation ? 1 : 0;
  const animationDuration = shouldReduceMotion ? 0 : duration;

  const isVisible = inView || shouldReduceMotion;

  const safeRest = rest;

  let computedTabIndex: number | undefined;
  if (tabIndex !== undefined) {
    computedTabIndex = tabIndex;
  } else if (!isVisible) {
    computedTabIndex = -1;
  } else {
    computedTabIndex = undefined;
  }

  return (
    <motion.span
      animate={
        isVisible
          ? {
              opacity: 1,
              x: 0,
              y: 0,
            }
          : {}
      }
      initial={{
        opacity: initialOpacity,
        x: initialX,
        y: initialY,
      }}
      style={{
        display: 'inline-block',
        height: '100%',
        width: '100%',
        ...style,
      }}
      transition={{
        delay: delay / 1000,
        duration: animationDuration / 1000,
        ease: [0.4, 0, 0.2, 1],
      }}
      aria-hidden={!isVisible && !shouldReduceMotion ? 'true' : undefined}
      aria-label={ariaLabel}
      aria-live={ariaLive}
      className={className}
      ref={forkedRef}
      role={ariaLabel ? 'region' : undefined}
      tabIndex={computedTabIndex}
      {...safeRest}
    >
      {children}
    </motion.span>
  );
});
