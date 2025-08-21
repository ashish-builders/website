'use client';

import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme, alpha } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'motion/react';

type LeadFormSuccessDialogProps = {
  onClose: () => void;
  onExited?: () => void;
  open: boolean;
};

export function LeadFormSuccessDialog({ onClose, onExited, open }: LeadFormSuccessDialogProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const headingId = React.useId();
  const descriptionId = React.useId();

  return (
    <Dialog
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
        },
        paper: {
          'aria-describedby': descriptionId,
          'aria-labelledby': headingId,
          'aria-modal': true,
          itemScope: true,
          itemType: 'https://schema.org/ConfirmAction',
          role: 'dialog',
          sx: {
            borderRadius: isMobile ? 0 : 3,
            overflow: 'hidden',
            position: 'relative',
          },
        },
        transition: {
          onExited,
          unmountOnExit: true,
        },
      }}
      maxWidth="sm"
      onClose={onClose}
      open={open}
      fullWidth
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          background: `linear-gradient(45deg, ${alpha(
            theme.palette.primary.main,
            0.1,
          )}, ${alpha(theme.palette.secondary.main, 0.1)})`,
          borderRadius: '50%',
          height: 150,
          position: 'absolute',
          right: -50,
          top: -50,
          width: 150,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          background: `linear-gradient(45deg, ${alpha(
            theme.palette.secondary.main,
            0.1,
          )}, ${alpha(theme.palette.primary.main, 0.1)})`,
          borderRadius: '50%',
          bottom: -30,
          height: 100,
          left: -30,
          position: 'absolute',
          width: 100,
          zIndex: 0,
        }}
      />

      <DialogContent
        sx={{
          position: 'relative',
          px: 3,
          py: 4,
          textAlign: 'center',
          zIndex: 1,
        }}
        aria-live="polite"
        role="document"
      >
        {/* Success Icon with Animation */}
        <Box sx={{ mb: 3 }}>
          <motion.div
            animate={{ rotate: 0, scale: 1 }}
            initial={{ rotate: -180, scale: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <CheckCircleIcon
              sx={{
                color: theme.palette.success.main,
                filter: `drop-shadow(0 4px 8px ${alpha(theme.palette.success.main, 0.3)})`,
                fontSize: 80,
              }}
            />
          </motion.div>
        </Box>

        {/* Success Message */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: { sm: '2rem', xs: '1.5rem' },
              fontWeight: 600,
              mb: 2,
            }}
            aria-level={2}
            component="h2"
            id={headingId}
            itemProp="name"
            role="heading"
            variant="h4"
          >
            Thank You!
          </Typography>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Typography
            sx={{
              color: theme.palette.text.secondary,
              fontSize: { sm: '1rem', xs: '0.9rem' },
              lineHeight: 1.6,
              mb: 3,
            }}
            component="p"
            id={descriptionId}
            itemProp="description"
            variant="body1"
          >
            Your inquiry has been successfully submitted. Our team will review your requirements and
            get back to you.
          </Typography>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { sm: 'row', xs: 'column' },
              gap: 2,
              justifyContent: 'center',
              mb: 3,
            }}
            aria-label="Contact Information"
            itemProp="contactPoint"
            itemType="https://schema.org/ContactPoint"
            role="contentinfo"
            itemScope
          >
            <Box
              sx={{
                alignItems: 'center',
                color: theme.palette.text.secondary,
                display: 'flex',
                fontSize: '0.875rem',
                gap: 1,
              }}
              itemProp="telephone"
            >
              <PhoneIcon sx={{ fontSize: 18 }} />
              <Typography variant="body2">+91 80 579 77777</Typography>
            </Box>
            <Box
              sx={{
                alignItems: 'center',
                color: theme.palette.text.secondary,
                display: 'flex',
                fontSize: '0.875rem',
                gap: 1,
              }}
              itemProp="email"
            >
              <EmailIcon sx={{ fontSize: 18 }} />
              <Typography variant="body2">info@ashishbuilders.com</Typography>
            </Box>
          </Box>
        </motion.div>
      </DialogContent>

      <DialogActions sx={{ pb: 3, pt: 0, px: 3 }}>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          style={{ width: '100%' }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button color="tertiary" onClick={onClose} size="large" variant="contained" fullWidth>
            Continue Browsing
          </Button>
        </motion.div>
      </DialogActions>
    </Dialog>
  );
}
