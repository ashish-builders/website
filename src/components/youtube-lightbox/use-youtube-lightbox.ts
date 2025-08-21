'use client';

import * as React from 'react';
import { YoutubeLightboxContext } from './youtube-lightbox-context';

export function useYoutubeLightbox() {
  const context = React.useContext(YoutubeLightboxContext);
  if (!context) {
    throw new Error('useYoutubeLightbox must be used within a YoutubeLightboxProvider');
  }
  return context;
}
