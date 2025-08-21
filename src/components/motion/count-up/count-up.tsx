'use client';

import {
  AnimateNumber,
  AnimateNumberProps,
} from '@/components/motion/animate-number/animate-number';
import { useInView } from 'motion/react';
import * as React from 'react';
import { useForkRef } from '@mui/material/utils';

type CountUpProps = AnimateNumberProps;
function CountUpComponent(
  { children, ...props }: CountUpProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const internalRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(internalRef, { once: true });
  const composedRef = useForkRef(ref, internalRef);

  return (
    <AnimateNumber ref={composedRef} {...props}>
      {isInView ? children : 0}
    </AnimateNumber>
  );
}

export const CountUp = React.forwardRef(CountUpComponent);

if (process.env.NODE_ENV !== 'production') {
  CountUp.displayName = 'CountUp';
}
