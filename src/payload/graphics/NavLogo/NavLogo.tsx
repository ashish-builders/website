import * as React from 'react';
import Link from 'next/link';
import Logo from '@/payload/graphics/Logo/Logo';
import classes from './NavLogo.module.css';

export default function NavLogo() {
  return (
    <Link className={classes.root} href="/admin">
      <Logo />
    </Link>
  );
}
