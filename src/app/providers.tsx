'use client'

import * as React from 'react'

export type ProvidersProps = { children: React.ReactNode }

export default function Providers(props: ProvidersProps) {
  const { children } = props
  return <React.Fragment>{children}</React.Fragment>
}
