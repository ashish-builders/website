import * as React from 'react';
import Paper from '@mui/material/Paper';

export function LocationSection({ address }: { address: string }) {
  return (
    <Paper
      sx={{
        alignItems: 'center',
        bgcolor: 'grey.100',
        display: 'flex',
        height: 350,
        justifyContent: 'center',
        overflow: 'hidden',
        p: 0,
      }}
      elevation={0}
    >
      <iframe
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed&z=12`}
        style={{ border: 0 }}
        title="Ashish Builders & Developers Location"
        width="100%"
        allowFullScreen
      />
    </Paper>
  );
}
