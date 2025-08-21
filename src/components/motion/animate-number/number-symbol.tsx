import { motion, AnimatePresence, useIsPresent, type HTMLMotionProps } from 'motion/react';
import * as React from 'react';
import { maskHeight } from './mask';
import { SectionContext } from './section-context';

interface NumberSymbolProps extends HTMLMotionProps<'span'> {
  children: React.ReactNode;
  layoutDependency?: unknown;
}

function NumberSymbolComponent(props: NumberSymbolProps, ref: React.ForwardedRef<HTMLSpanElement>) {
  const { children, layoutDependency, ...rest } = props;
  const isPresent = useIsPresent();
  const { justify } = React.useContext(SectionContext);

  return (
    <motion.span
      {...rest}
      style={{
        display: 'inline-flex',
        justifyContent: justify,
        padding: `calc(${maskHeight}/2) 0`, // Match digits
        position: 'relative', // Needed for AnimatePresence popLayout
      }}
      data-state={isPresent ? undefined : 'exiting'}
      layout="position"
      layoutDependency={layoutDependency}
      ref={ref}
    >
      <AnimatePresence
        anchorX={justify === 'left' || justify === 'right' ? justify : undefined}
        initial={false}
        mode="popLayout"
      >
        <motion.span
          style={{
            display: 'inline-block',
            whiteSpace: 'pre', // Some symbols are spaces or thin spaces
          }}
          animate={{ opacity: [null, 1] }}
          exit={{ opacity: [null, 0] }}
          initial={{ opacity: 0 }}
          key={children?.toString()} // Use children's string representation as a key
          layout={justify === 'right' ? 'position' : false}
          layoutDependency={layoutDependency}
        >
          {children}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}

const NumberSymbol = React.forwardRef(NumberSymbolComponent);

if (process.env.NODE_ENV !== 'production') {
  NumberSymbol.displayName = 'NumberSymbol';
}

export { NumberSymbol };
