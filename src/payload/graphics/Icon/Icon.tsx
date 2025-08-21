import * as React from 'react';
import classes from './Icon.module.css';

export default function Icon() {
  return (
    <div className={classes.logoWrap}>
      <div className={classes.iconWrap}>
        A
      </div>
      <span className={classes.srOnly}>Logo</span>
    </div>
  );
}
