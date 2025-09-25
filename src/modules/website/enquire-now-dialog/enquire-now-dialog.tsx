'use client';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { darken, useTheme } from '@mui/material/styles';
import { Image } from '@/components/image/image';
import {
  MuiButtonElement,
  MuiTextFieldElement,
  MuiCheckboxElement,
  MuiFormHelperTextElement,
} from '@piplup/rhf-adapters/mui-material';
import { type Control } from 'react-hook-form';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import { FormControlLabel } from '@mui/material';
import { PropertyType, WhenToBuy, type LeadFormValues } from '../use-lead-form';

type EnquireNowDialogProps = {
  control: Control<LeadFormValues>;
  error?: string;
  isError?: boolean;
  isSubmitting?: boolean;
  onClose: () => void;
  onExited?: () => void;
  onSubmit: React.ComponentProps<'form'>['onSubmit'];
  open: boolean;
};

export function EnquireNowDialog(props: EnquireNowDialogProps) {
  const { control, error, isError, isSubmitting, onClose, onExited, onSubmit, open } = props;

  const theme = useTheme();

  return (
    <Dialog
      slotProps={{
        paper: {
          'aria-label': 'Enquire Now Form',
          component: 'form',
          itemScope: true,
          itemType: 'https://schema.org/ContactForm',
          onSubmit,
          role: 'form',
        },
        transition: {
          onExited,
          unmountOnExit: true,
        },
      }}
      maxWidth="sm"
      onClose={onClose}
      open={open}
      disableRestoreFocus
      fullWidth
    >
      <DialogTitle
        sx={{
          backgroundColor: darken(theme.palette.success.light, 0.1),
          color: 'common.white',
          m: 0,
          px: 2,
          py: 1,
          textAlign: 'center',
        }}
        aria-level={2}
        component="h2"
        id="enquire-now-title"
        itemProp="name"
        role="heading"
      >
        Enquire Now
      </DialogTitle>
      <IconButton
        sx={{
          color: theme.palette.common.white,
          position: 'absolute',
          right: 8,
          top: 4,
        }}
        aria-label="Close dialog"
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent sx={{ p: 0 }}>
        <Grid
          sx={{
            backgroundColor: theme.palette.grey[100],
          }}
          role="presentation"
          container
        >
          <Grid
            sx={{
              alignSelf: 'center',
              display: { sm: 'block', xs: 'none' },
              isolation: 'isolate',
              position: 'relative',
            }}
            aria-label="Enquire Now Visual"
            role="region"
            size={{ sm: 5, xs: 12 }}
          >
            <Box px={3} py={2}>
              <Typography
                aria-level={3}
                component="h3"
                fontWeight={500}
                itemProp="headline"
                role="heading"
                variant="h4"
              >
                Home that fit your life
              </Typography>
              <Typography component="p" itemProp="description" variant="body1">
                Just an enquiry away
              </Typography>
            </Box>
            <Image
              sx={{
                height: 'auto',
                mt: -4,
                position: 'relative',
                width: '100%',
                zIndex: -1,
              }}
              alt="Enquire Now Background"
              aria-hidden="true"
              height={229}
              loading="lazy"
              priority={false}
              quality={100}
              sizes="100vw"
              src="/assets/enquire-now/enquire-now-bg.webp"
              width={279}
            />
          </Grid>

          <Grid
            sx={{
              backgroundColor: theme.palette.background.paper,
            }}
            aria-label="Enquire Now Form Fields"
            role="region"
            size={{ sm: 7, xs: 12 }}
          >
            <Box px={3} py={2}>
              <Stack direction="column" spacing={1.5} useFlexGap>
                <MuiTextFieldElement
                  aria-label="Full Name"
                  color="tertiary"
                  control={control}
                  itemProp="name"
                  label="Full Name"
                  name="name"
                  placeholder="Enter your name"
                  size="small"
                  variant="standard"
                  autoFocus
                  fullWidth
                  required
                />
                <MuiTextFieldElement
                  aria-label="Phone Number"
                  color="tertiary"
                  control={control}
                  itemProp="telephone"
                  label="Phone Number"
                  name="phone"
                  placeholder="Enter your phone number"
                  size="small"
                  variant="standard"
                  fullWidth
                  required
                />
                <MuiTextFieldElement
                  aria-label="Email Address"
                  color="tertiary"
                  control={control}
                  itemProp="email"
                  label="Email Address"
                  name="email"
                  placeholder="Enter your email address"
                  size="small"
                  variant="standard"
                  fullWidth
                  required
                />
                <MuiTextFieldElement
                  aria-label="Property Type"
                  color="tertiary"
                  control={control}
                  itemProp="category"
                  label="Property Type"
                  name="propertyType"
                  size="small"
                  variant="standard"
                  fullWidth
                  required
                  select
                >
                  {Object.values(PropertyType).map((type) => (
                    <MenuItem key={type.value} value={type.value}>
                      {type.label}
                    </MenuItem>
                  ))}
                </MuiTextFieldElement>
                <MuiTextFieldElement
                  aria-label="When do you plan to buy?"
                  color="tertiary"
                  control={control}
                  itemProp="expectedArrival"
                  label="When do you plan to buy?"
                  name="whenToBuy"
                  size="small"
                  variant="standard"
                  fullWidth
                  required
                  select
                >
                  {Object.values(WhenToBuy).map((type) => (
                    <MenuItem key={type.value} value={type.value}>
                      {type.label}
                    </MenuItem>
                  ))}
                </MuiTextFieldElement>
                <div>
                  <FormControlLabel
                    control={
                      <MuiCheckboxElement
                        slotProps={{
                          input: {
                            'aria-label': 'checkbox',
                          },
                        }}
                        transform={{
                          input: (value) => (value ? 'true' : 'false'),
                          output: (event) => {
                            return !!event?.target.checked;
                          },
                        }}
                        checked={(value) => value === 'true'}
                        control={control}
                        name="iAgree"
                        size="small"
                        value="false"
                      />
                    }
                    sx={{
                      '& span': {
                        fontSize: '0.75rem',
                      },
                    }}
                    label="I am giving my consent to receive calls and updates through SMS/Email & WhatsApp"
                  />
                  <MuiFormHelperTextElement control={control} name="iAgree" />
                </div>
              </Stack>

              <MuiButtonElement
                aria-label="Submit Enquiry"
                color="tertiary"
                control={control}
                itemProp="potentialAction"
                loading={isSubmitting}
                loadingPosition="start"
                sx={{ mt: 3, px: 5 }}
                type="submit"
                variant="contained"
              >
                Submit
              </MuiButtonElement>
              {isError && (
                <Alert aria-live="assertive" role="alert" severity="error" sx={{ mt: 2 }}>
                  {error}
                </Alert>
              )}
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
