'use client';

import { motion, AnimatePresence, type HTMLMotionProps } from 'motion/react';
import * as React from 'react';
import { useIsInitialRender } from './hooks/use-is-initial-render';
import { NumberDigit } from './number-digit';
import { NumberSymbol } from './number-symbol';
import { SectionContext } from './section-context';
import { getWidthInEm } from './utils/get-width-in-ems';
import { targetWidths } from './utils/target-widths';
import { type Part } from './types';

export interface NumberSectionProps extends HTMLMotionProps<'span'> {
  justify?: 'center' | 'left' | 'right';
  layoutDependency?: unknown;
  mode?: 'popLayout' | 'sync';
  name: string;
  parts: Part[];
}

function NumberSectionComponent(
  { justify = 'left', layoutDependency, mode, name, parts, style, ...rest }: NumberSectionProps,
  _ref: React.ForwardedRef<HTMLSpanElement>,
) {
  const ref = React.useRef<HTMLSpanElement>(null);
  React.useImperativeHandle(_ref, () => ref.current!, []);

  const context = React.useMemo(() => ({ justify }), [justify]);
  const measuredRef = React.useRef<HTMLSpanElement>(null);
  const isInitialRender = useIsInitialRender();

  const [width, setWidth] = React.useState<string | undefined>();

  const partsKey = parts.map((p) => p.value).join('');

  React.useEffect(() => {
    if (!measuredRef.current) {
      return;
    }

    if (isInitialRender) {
      if (ref.current) {
        ref.current.style.width = getWidthInEm(measuredRef.current);
      }
      return;
    }

    const undos = Array.from(measuredRef.current.children).map((child) => {
      if (!(child instanceof HTMLElement)) {
        return () => {};
      }

      if (child.dataset.state === 'exiting') {
        const next = child.nextSibling;
        child.remove();
        return () => {
          if (measuredRef.current) {
            measuredRef.current.insertBefore(child, next);
          }
        };
      }

      const newWidth = targetWidths.get(child);
      if (!newWidth) {
        return () => {};
      }

      const oldWidth = child.style.width;
      child.style.width = newWidth;
      return () => {
        child.style.width = oldWidth;
      };
    });

    setWidth(getWidthInEm(measuredRef.current));

    for (let i = undos.length - 1; i >= 0; i -= 1) {
      const undo = undos[i];
      if (undo) {
        undo();
      }
    }
  }, [partsKey, isInitialRender]);

  return (
    <SectionContext.Provider value={context}>
      <motion.span
        layoutDependency={layoutDependency}
        {...rest}
        style={{
          ...style,
          display: 'inline-flex',
          justifyContent: justify,
          width,
        }}
        className={`number-section-${name}`}
        ref={ref}
      >
        <span
          style={{
            display: 'inline-flex',
            justifyContent: 'inherit',
            position: 'relative',
          }}
          ref={measuredRef}
        >
          {'\u200B'}
          <AnimatePresence
            anchorX={justify === 'center' ? undefined : justify}
            initial={false}
            mode={mode}
          >
            {parts.map((part) =>
              part.type === 'integer' || part.type === 'fraction' ? (
                <NumberDigit
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  initialValue={isInitialRender ? undefined : 0}
                  key={part.key}
                  layoutDependency={layoutDependency}
                  value={part.value as number}
                />
              ) : (
                <NumberSymbol
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  key={part.type === 'literal' ? `${part.key}:${part.value}` : part.key}
                  layoutDependency={layoutDependency}
                >
                  {part.value}
                </NumberSymbol>
              ),
            )}
          </AnimatePresence>
        </span>
      </motion.span>
    </SectionContext.Provider>
  );
}

const NumberSection = React.forwardRef(NumberSectionComponent);

if (process.env.NODE_ENV !== 'production') {
  NumberSection.displayName = 'NumberSection';
}

export { NumberSection };
