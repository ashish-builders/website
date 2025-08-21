import * as React from 'react';
import { Icon, type IconProps } from '@iconify/react';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { iconifyClasses } from './classes';
import { allIconNames, registerIcons, type IconifyName } from './register-icons';

const IconRoot = styled(Icon)({});

export type IconifyProps = React.ComponentProps<typeof IconRoot> &
  Omit<IconProps, 'icon'> & {
    icon: IconifyName;
  };

export function Iconify({ className, height, icon, sx, width = 20, ...other }: IconifyProps) {
  const id = React.useId();

  if (!allIconNames.includes(icon)) {
    console.warn(
      [
        `Icon "${icon}" is currently loaded online, which may cause flickering effects.`,
        `To ensure a smoother experience, please register your icon collection for offline use.`,
      ].join('\n'),
    );
  }

  registerIcons();

  return (
    <IconRoot
      sx={[
        {
          display: 'inline-flex',
          flexShrink: 0,
          height: height ?? width,
          width,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={clsx([iconifyClasses.root, className])}
      icon={icon}
      id={id}
      ssr
      {...other}
    />
  );
}
