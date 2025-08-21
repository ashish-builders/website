'use client';

import * as React from 'react';
import { useBoolean } from '@/hooks/utils/use-boolean';
import { useSearchParams } from 'next/navigation';
import useSaveLeadFormService from '@/services/form/save-lead-form-service';
import {
  EnquireNowDialogContext,
  type EnquireNowDialogContextType,
} from './enquire-now-dialog-context';
import { EnquireNowDialog } from './enquire-now-dialog';
import { LeadFormSuccessDialog } from '../lead-form-success-dialog';
import { getLeadFormDefaultValues, useLeadForm } from '../use-lead-form';

export function EnquireNowDialogProvider({ children }: { children: React.ReactNode }) {
  // ─── State ───────────────────────────────────────────────────────────
  const searchParams = useSearchParams();
  const enquireNowDialog = useBoolean(false);
  const leadSuccessDialog = useBoolean(false);
  const [isEnquirySuccess, setIsEnquirySuccess] = React.useState(false);

  // ─── Form ────────────────────────────────────────────────────────────
  const { control, handleSubmit, reset } = useLeadForm();

  // ─── Service ─────────────────────────────────────────────────────────
  const saveLeadFormService = useSaveLeadFormService();

  // ─── Callbacks ───────────────────────────────────────────────────────
  const onSubmit = handleSubmit(async (data) => {
    try {
      // // Get UTM parameters from URL using useSearchParams
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

      const mutateAsync = saveLeadFormService.mutateAsync;
      await mutateAsync({
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
      setIsEnquirySuccess(true);
      const enquireNowDialogClose = enquireNowDialog.onFalse;
      enquireNowDialogClose();
    } catch {
      // Handle Error
    }
  });

  const handleEnquiryNowDialogExited = React.useCallback(() => {
    reset(getLeadFormDefaultValues());
    if (isEnquirySuccess) {
      const leadSuccessDialogOpen = leadSuccessDialog.onTrue;
      leadSuccessDialogOpen();
    }
  }, [reset, isEnquirySuccess, leadSuccessDialog.onTrue]);

  const handleLeadSuccessDialogExited = React.useCallback(() => {
    setIsEnquirySuccess(false);
  }, []);

  const contextValue = React.useMemo<EnquireNowDialogContextType>(
    () => ({
      close: enquireNowDialog.onFalse,
      open: enquireNowDialog.onTrue,
    }),
    [enquireNowDialog.onTrue, enquireNowDialog.onFalse],
  );

  return (
    <EnquireNowDialogContext.Provider value={contextValue}>
      {children}
      <EnquireNowDialog
        error={
          saveLeadFormService.error instanceof Error
            ? saveLeadFormService.error.message
            : 'An unexpected error occurred. Please try again.'
        }
        control={control}
        isError={saveLeadFormService.isError}
        isSubmitting={saveLeadFormService.isPending}
        onClose={enquireNowDialog.onFalse}
        onExited={handleEnquiryNowDialogExited}
        onSubmit={onSubmit}
        open={enquireNowDialog.value}
      />
      <LeadFormSuccessDialog
        onClose={leadSuccessDialog.onFalse}
        onExited={handleLeadSuccessDialogExited}
        open={leadSuccessDialog.value}
      />
    </EnquireNowDialogContext.Provider>
  );
}
