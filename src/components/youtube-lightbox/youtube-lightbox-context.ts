'use client';

import * as React from 'react';

export type YoutubeLightboxContextType = {
  close: () => void;
  open: (videoId: string) => void;
};

export const YoutubeLightboxContext = React.createContext<null | YoutubeLightboxContextType>(null);
