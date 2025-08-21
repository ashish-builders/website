import * as React from 'react';
import { Logo as ClientLogo } from '@/modules/icons/logo';
import classes from './Logo.module.css';

export default function Logo() {
  return (
    <div className={classes.root}>
      <ClientLogo height="59" width="124" />
    </div>
  );
}
