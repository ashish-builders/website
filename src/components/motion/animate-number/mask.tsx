import { motion, addScaleCorrector, type MotionStyle } from 'motion/react';
import * as React from 'react';

// Build the mask for the numbers. This technique creates a soft vignette effect.
// See: https://expensive.toys/blog/blur-vignette
const maskHeight = 'var(--mask-height, 0.15em)';
const maskWidth = 'var(--mask-width, 0.5em)';
const correctedMaskWidth = `calc(${maskWidth} / var(--invert-x, 1))`;
const cornerGradient = `#000 0, transparent 71%`;

const mask = `
  linear-gradient(to right, transparent 0, #000 ${correctedMaskWidth}, #000 calc(100% - ${correctedMaskWidth}), transparent),
  linear-gradient(to bottom, transparent 0, #000 ${maskHeight}, #000 calc(100% - ${maskHeight}), transparent 100%),
  radial-gradient(at bottom right, ${cornerGradient}),
  radial-gradient(at bottom left, ${cornerGradient}),
  radial-gradient(at top left, ${cornerGradient}),
  radial-gradient(at top right, ${cornerGradient})
`;

const maskSize = `
  100% calc(100% - ${maskHeight} * 2),
  calc(100% - ${correctedMaskWidth} * 2) 100%,
  ${correctedMaskWidth} ${maskHeight},
  ${correctedMaskWidth} ${maskHeight},
  ${correctedMaskWidth} ${maskHeight},
  ${correctedMaskWidth} ${maskHeight}
`;

addScaleCorrector({
  '--invert-x': {
    correct: (_, { projectionDelta, treeScale }) =>
      (projectionDelta?.x.scale ?? 1) * (treeScale?.x ?? 1),
  },
});

export interface MaskProps {
  children: React.ReactNode;
  layoutDependency?: unknown;
}

function Mask({ children, layoutDependency }: MaskProps) {
  const style = {
    // Activates the scale correction, which gets stored in --invert-x
    '--invert-x': 1,
    display: 'inline-flex',
    margin: `0 calc(-1*${maskWidth})`,
    overflow: 'clip', // important so it doesn't affect page layout
    padding: `calc(${maskHeight}/2) ${maskWidth}`,
    position: 'relative',
    // Prefixed properties have better support than unprefixed ones:
    WebkitMaskImage: mask,
    WebkitMaskPosition: 'center, center, top left, top right, bottom right, bottom left',
    WebkitMaskRepeat: 'no-repeat',
    WebkitMaskSize: maskSize,
    zIndex: -1, // should be underneath everything else
  } as MotionStyle & React.CSSProperties;

  return (
    <motion.span aria-hidden="true" layoutDependency={layoutDependency} style={style} layout>
      {children}
    </motion.span>
  );
}

export { Mask, maskHeight };
