'use client';

import * as React from 'react';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { Logo } from '@/modules/icons/logo';

export function LogoFixedButton() {
  const theme = useTheme();
  const [isVisible, setIsVisible] = React.useState(false);

  // Use Framer Motion's scroll detection
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const windowHeight = window.innerHeight;
    const shouldBeVisible = latest > windowHeight;

    // Only update state if it actually changed
    setIsVisible((prevVisible) => {
      if (prevVisible !== shouldBeVisible) {
        return shouldBeVisible;
      }
      return prevVisible;
    });
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          style={{
            left: 0,
            position: 'fixed',
            top: '42%',
            transform: 'translateY(-50%)',
            zIndex: theme.zIndex.fab,
          }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Fab
            sx={{
              '&:hover': {
                backgroundColor: theme.palette.common.white,
              },
              backgroundColor: theme.palette.common.white,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: `${theme.shape.borderRadius}px`,
              borderTopLeftRadius: 0,
              borderTopRightRadius: `${theme.shape.borderRadius}px`,
              color: theme.palette.common.white,
              height: 'auto',
              minHeight: 'auto',
              minWidth: 'auto',
              px: 1,
              py: 1,
              width: 'fit-content',
            }}
            aria-label="Enquire Now"
            color="default"
            href="/"
            LinkComponent={Link}
            variant="extended"
          >
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Logo
                style={{
                  display: 'block',
                }}
                height={84.5}
                orientation="vertical"
                width={47.45}
              />
            </Box>
          </Fab>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
