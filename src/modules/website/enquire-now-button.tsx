'use client';

import Button, { type ButtonProps } from '@mui/material/Button';
import * as React from 'react';
import { EnquireNowDialogProvider } from './enquire-now-dialog/enquire-now-dialog-provider';
import { useEnquireNowDialog } from './enquire-now-dialog/use-enquire-now-dialog';

type EnquireNowButtonProps = Omit<ButtonProps, 'children'>;

function EnquireNowButtonComponent(props: EnquireNowButtonProps) {
  const { onClick, ...rest } = props;

  const enquireNowDialog = useEnquireNowDialog();

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const enquireNowDialogOpen = enquireNowDialog.open;
      enquireNowDialogOpen();
      if (typeof onClick === 'function') {
        onClick(event);
      }
    },
    [onClick, enquireNowDialog.open],
  );

  return (
    <Button onClick={handleClick} {...rest}>
      Enquire Now
    </Button>
  );
}

export function EnquireNowButton(props: EnquireNowButtonProps) {
  return (
    <React.Suspense fallback={null}>
      <EnquireNowDialogProvider>
        <EnquireNowButtonComponent {...props} />
      </EnquireNowDialogProvider>
    </React.Suspense>
  );
}
