import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { LeadForm } from '@/modules/website/lead-form';
import * as React from 'react';

export function ContactForm() {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        p: 3,
      }}
      elevation={3}
    >
      <Typography color="quaternary" component="h2" fontWeight={600} mb={1} variant="h5">
        Send us a Message
      </Typography>
      <Typography color="text.secondary" mb={3}>
        Fill out the form and our team will get back to you.
      </Typography>
      <React.Suspense fallback={null}>
        <LeadForm />
      </React.Suspense>
    </Paper>
  );
}
