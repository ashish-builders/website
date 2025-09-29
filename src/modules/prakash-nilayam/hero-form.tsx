'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useForm } from 'react-hook-form';
import { MuiTextFieldElement } from '@piplup/rhf-adapters/mui-material';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useBoolean } from '@/hooks/utils/use-boolean';
import { LeadFormSuccessDialog } from '@/modules/website/lead-form-success-dialog';
import Script from 'next/script';

const schema = z.object({
  CONTACTCF1: z.string().min(1, 'City cannot be empty'),
  CONTACTCF2: z.string().min(1, 'Please select your interest'),
  'First Name': z.string().min(1, 'First Name cannot be empty'),
  'Last Name': z.string().min(1, 'Last Name cannot be empty'),
  Mobile: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid Indian mobile number'),
});

const defaultValues = {
  CONTACTCF1: '',
  CONTACTCF2: '',
  'First Name': '',
  'Last Name': '',
  Mobile: '',
};

export function HeroForm() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const { control, handleSubmit, reset } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });
  const leadSuccessDialog = useBoolean(false);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  // Listen for iframe load to show success dialog
  React.useEffect(() => {
    const handler = () => {
      leadSuccessDialog.onTrue();
      reset(defaultValues);
    };
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', handler);
    }
    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handler);
      }
    };
  }, [leadSuccessDialog, reset]);

  return (
    <React.Fragment>
      <iframe
        className="iframe-container"
        id="hidden965932000000502003Frame"
        name="hidden965932000000502003Frame"
        style={{ display: 'none' }}
        title="Enquire Now Hidden Frame"
      />
      <Box
        onSubmit={handleSubmit(() => {
          formRef.current?.submit();
        })}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          maxWidth: 500,
          mx: 'auto',
        }}
        autoComplete="off"
        component="form"
        encType="multipart/form-data"
        id="BiginWebToRecordForm965932000000502003"
        method="POST"
        name="BiginWebToRecordForm965932000000502003"
        ref={formRef}
        target="hidden965932000000502003Frame"
      >
        {/* Hidden Zoho fields */}
        <input
          name="xnQsjsdp"
          style={{ display: 'none' }}
          type="text"
          value="bd722a461a78772f9e5c12d17cc9e7a486bc31bd2460f6f8f94a93b65961164a"
          readOnly
        />
        <input id="zc_gad" name="zc_gad" type="hidden" value="" readOnly />
        <input
          name="xmIwtLD"
          style={{ display: 'none' }}
          type="text"
          value="3bf9ec4381fbc4ad9226a2a2a0d1d715487bf145caed7ca1556e660df35339bab5fbf6a770c85adab3d8efa461d1951a"
          readOnly
        />
        <input
          name="actionType"
          style={{ display: 'none' }}
          type="text"
          value="Q29udGFjdHM="
          readOnly
        />
        <input id="rmsg" name="rmsg" type="hidden" value="true" readOnly />
        <input name="returnURL" style={{ display: 'none' }} type="text" value="null" readOnly />
        <div>
          <MuiTextFieldElement
            color="quaternary"
            control={control}
            id="firstName"
            label="First Name"
            name="First Name"
            size="small"
            fullWidth
            required
          />
        </div>
        <div>
          <MuiTextFieldElement
            color="quaternary"
            control={control}
            id="lastName"
            label="Last Name"
            name="Last Name"
            size="small"
            fullWidth
            required
          />
        </div>
        <div>
          <MuiTextFieldElement
            color="quaternary"
            control={control}
            id="mobile"
            label="Mobile"
            name="Mobile"
            size="small"
            fullWidth
            required
          />
        </div>
        <div>
          <MuiTextFieldElement
            color="quaternary"
            control={control}
            id="city"
            label="City"
            name="CONTACTCF1"
            size="small"
            fullWidth
            required
          />
        </div>
        <div>
          <MuiTextFieldElement
            color="quaternary"
            control={control}
            label="Interested In"
            name="CONTACTCF2"
            size="small"
            fullWidth
            select
          >
            <MenuItem value="Investment">Investment</MenuItem>
            <MenuItem value="First&#x20;Home&#x20;-&#x20;Self&#x20;Use">
              First Home - Self Use
            </MenuItem>
            <MenuItem value="Second&#x20;Home&#x20;-&#x20;Self&#x20;Use">
              Second Home - Self Use
            </MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </MuiTextFieldElement>
        </div>
        <Button color="quaternary" size="large" sx={{ mt: 2 }} type="submit" variant="contained">
          Submit
        </Button>
      </Box>
      <Script
        id="wf_script"
        src="https://bigin.zoho.in/crm/WebformScriptServlet?rid=3bf9ec4381fbc4ad9226a2a2a0d1d715487bf145caed7ca1556e660df35339bab5fbf6a770c85adab3d8efa461d1951agidbd722a461a78772f9e5c12d17cc9e7a486bc31bd2460f6f8f94a93b65961164a"
      />

      <LeadFormSuccessDialog onClose={leadSuccessDialog.onFalse} open={leadSuccessDialog.value} />
    </React.Fragment>
  );
}
