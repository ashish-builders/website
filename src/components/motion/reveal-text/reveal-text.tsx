'use client';

import { motion } from 'motion/react';
import * as React from 'react';

const root = {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  height: 32,
  maxWidth: '100%',
  overflow: 'hidden',
  position: 'relative',
  width: 'fit-content',
} as React.CSSProperties;

export function RevealText({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.span
      style={{
        ...root,
        justifyContent: isHovered ? 'flex-end' : 'flex-start',
      }}
      onHoverEnd={() => setIsHovered(false)}
      onHoverStart={() => setIsHovered(true)}
    >
      <motion.span layout>{children}</motion.span>
      <motion.span aria-hidden layout>
        {children}
      </motion.span>
    </motion.span>
  );
}
