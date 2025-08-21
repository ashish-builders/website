'use client';

import * as React from 'react';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { useTheme, darken } from '@mui/material/styles';
import { useEnquireNowDialog } from './use-enquire-now-dialog';

export function EnquireNowFixedButton() {
  const theme = useTheme();
  const [isVisible, setIsVisible] = React.useState(false);
  const enquireNowDialog = useEnquireNowDialog();

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

  const handleClick = () => {
    enquireNowDialog.open();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          style={{
            left: 0,
            position: 'fixed',
            top: '40%',
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
                backgroundColor: darken(theme.palette.quaternary.main, 0.1),
              },
              backgroundColor: theme.palette.quaternary.main,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: `${theme.shape.borderRadius}px`,
              borderTopLeftRadius: 0,
              borderTopRightRadius: `${theme.shape.borderRadius}px`,
              color: theme.palette.common.white,
              height: 'auto',
              minHeight: 'auto',
              minWidth: 'auto',
              px: 1.5,
              py: 2,
              width: 'fit-content',
            }}
            aria-label="Enquire Now"
            color="default"
            onClick={handleClick}
            variant="extended"
          >
            <Box
              sx={{
                lineHeight: 1,
                textOrientation: 'mixed',
                transform: 'rotate(180deg)',
                whiteSpace: 'nowrap',
                writingMode: 'vertical-rl',
              }}
            >
              ENQUIRE NOW
            </Box>
          </Fab>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
