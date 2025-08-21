'use client';

import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import { MuiTextFieldElement, MuiButtonElement } from '@piplup/rhf-adapters/mui-material';
import * as React from 'react';
import {
  useLeadForm,
  PropertyType,
  LeadFormValues,
  WhenToBuy,
  getLeadFormDefaultValues,
} from '@/modules/website/use-lead-form';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import useSaveLeadFormService from '@/services/form/save-lead-form-service';
import { LeadFormSuccessDialog } from './lead-form-success-dialog';

export function LeadForm() {
  // ─── State ───────────────────────────────────────────────────────────
  const searchParams = useSearchParams();
  const [successDialogOpen, setSuccessDialogOpen] = React.useState(false);

  // ─── Form ────────────────────────────────────────────────────────────
  const { control, handleSubmit, reset } = useLeadForm();

  // ─── Services ────────────────────────────────────────────────────────
  const saveLeadFormService = useSaveLeadFormService();

  // ─── Callbacks ───────────────────────────────────────────────────────
  const onSubmit = async (data: LeadFormValues) => {
    try {
      // Get UTM parameters from URL using useSearchParams
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const utm_source = searchParams.get('utm_source') || undefined;
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const utm_medium = searchParams.get('utm_medium') || undefined;
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const utm_campaign = searchParams.get('utm_campaign') || undefined;
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const utm_term = searchParams.get('utm_term') || undefined;
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const utm_content = searchParams.get('utm_content') || undefined;

      await saveLeadFormService.mutateAsync({
        email: data.email,
        name: data.name,
        phone: data.phone,
        propertyType: data.propertyType,
        utm_campaign,
        utm_content,
        utm_medium,
        utm_source,
        utm_term,
        whenToBuy: data.whenToBuy,
      });
      setSuccessDialogOpen(true);
      reset(getLeadFormDefaultValues());
    } catch {
      toast.error('Failed to submit form. Please try again.');
    }
  };

  const handleCloseSuccessDialog = () => {
    setSuccessDialogOpen(false);
  };

  const handleExitedSuccessDialog = () => {
    saveLeadFormService.reset();
  };
  return (
    <React.Fragment>
      <Stack
        aria-label="Contact form"
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        spacing={2}
        noValidate
      >
        <MuiTextFieldElement
          aria-label="Full Name"
          control={control}
          label="Full Name"
          name="name"
          placeholder="Enter your name"
          fullWidth
          required
        />
        <MuiTextFieldElement
          aria-label="Phone Number"
          control={control}
          label="Phone Number"
          name="phone"
          placeholder="Enter your phone number"
          fullWidth
          required
        />
        <MuiTextFieldElement
          aria-label="Email Address"
          control={control}
          label="Email Address"
          name="email"
          placeholder="Enter your email address"
          fullWidth
          required
        />
        <MuiTextFieldElement
          aria-label="Property Type"
          control={control}
          label="Property Type"
          name="propertyType"
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
          control={control}
          label="When do you plan to buy?"
          name="whenToBuy"
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
        <MuiButtonElement
          aria-label="Send Message"
          color="tertiary"
          control={control}
          disabled={saveLeadFormService.isPending}
          size="large"
          type="submit"
          variant="contained"
          fullWidth
        >
          {saveLeadFormService.isPending ? 'Sending...' : 'Send Message'}
        </MuiButtonElement>
      </Stack>

      <LeadFormSuccessDialog
        onClose={handleCloseSuccessDialog}
        onExited={handleExitedSuccessDialog}
        open={successDialogOpen}
      />
    </React.Fragment>
  );
}
