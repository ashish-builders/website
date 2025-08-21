'use client';

import * as React from 'react';
import { EnquireNowDialogContext } from './enquire-now-dialog-context';

export function useEnquireNowDialog() {
  const context = React.useContext(EnquireNowDialogContext);
  if (!context) {
    throw new Error('useEnquireNowDialog must be used within an EnquireNowDialogProvider');
  }
  return context;
}
