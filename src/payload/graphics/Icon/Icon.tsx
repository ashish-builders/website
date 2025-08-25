import * as React from 'react';
import classes from './Icon.module.css';

export default function Icon() {
  return (
    <div className={classes.icon}>
      <p>A</p>
      <span className={classes.srOnly}>Logo</span>
    </div>
  );
}
