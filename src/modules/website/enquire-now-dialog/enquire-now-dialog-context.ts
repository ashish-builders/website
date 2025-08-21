'use client';

import * as React from 'react';

export type EnquireNowDialogContextType = {
  close: () => void;
  open: () => void;
};

export const EnquireNowDialogContext = React.createContext<EnquireNowDialogContextType | null>(
  null,
);
