'use client';
import {
  MotionConfigContext,
  LayoutGroup,
  MotionConfig,
  motion,
  easeOut,
  Transition,
  type HTMLMotionProps,
} from 'motion/react';
import * as React from 'react';
import { maskHeight, Mask } from './mask';
import { NumberSection } from './number-section';
import { formatToParts } from './utils/format-parts';

export type AnimateNumberProps = Omit<HTMLMotionProps<'div'>, 'children'> & {
  children: bigint | number | string;
  format?: Omit<Intl.NumberFormatOptions, 'notation'> & {
    notation?: Exclude<Intl.NumberFormatOptions['notation'], 'engineering' | 'scientific'>;
  };
  locales?: Intl.LocalesArgument;
  prefix?: string;
  suffix?: string;
  transition?: React.ComponentProps<typeof MotionConfig>['transition'];
};

const DEFAULT_TRANSITION: Transition = {
  layout: { bounce: 0, duration: 1, type: 'spring' },
  opacity: { duration: 1, ease: easeOut },
  y: { bounce: 0, duration: 1, type: 'spring' },
};

function AnimateNumberComponent(
  props: AnimateNumberProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const { children: value, format, locales, prefix, style, suffix, transition, ...rest } = props;
  // Split the number into parts
  const parts = React.useMemo(
    () => formatToParts(value, { format, locales }, prefix, suffix),
    [value, locales, format, prefix, suffix],
  );
  const { formatted, fraction, integer, post, pre } = parts;

  const contextTransition = React.useContext(MotionConfigContext).transition;
  const finalTransition = transition ?? contextTransition ?? DEFAULT_TRANSITION;

  const { layoutDependency } = rest;
  const dependency = React.useMemo(() => {
    if (layoutDependency === undefined) {
      return undefined;
    }
    return { layoutDependency, value };
  }, [layoutDependency, value]);

  return (
    <LayoutGroup>
      <MotionConfig transition={finalTransition}>
        <motion.div
          {...rest}
          style={{
            lineHeight: 1,
            ...style,
            display: 'inline-flex',
            isolation: 'isolate',
            whiteSpace: 'nowrap',
          }}
          layoutDependency={dependency}
          ref={ref}
          layout
        >
          <motion.div
            style={{
              direction: 'ltr',
              display: 'inline-flex',
              isolation: 'isolate',
              position: 'relative',
              zIndex: -1,
            }}
            aria-label={formatted}
            layoutDependency={dependency}
            layout
          >
            <NumberSection
              justify="right"
              layoutDependency={dependency}
              mode="popLayout"
              name="pre"
              parts={pre}
              style={{ padding: `calc(${maskHeight}/2) 0` }}
              aria-hidden
            />
            <Mask layoutDependency={dependency}>
              <NumberSection
                justify="right"
                layoutDependency={dependency}
                name="integer"
                parts={integer}
              />
              <NumberSection
                layout="position"
                layoutDependency={dependency}
                name="fraction"
                parts={fraction}
              />
            </Mask>
            <NumberSection
              layout="position"
              layoutDependency={dependency}
              mode="popLayout"
              name="post"
              parts={post}
              style={{ padding: `calc(${maskHeight}/2) 0` }}
              aria-hidden
            />
          </motion.div>
        </motion.div>
      </MotionConfig>
    </LayoutGroup>
  );
}

const AnimateNumber = React.forwardRef(AnimateNumberComponent);

export { AnimateNumber, DEFAULT_TRANSITION };
