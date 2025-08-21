import * as React from 'react'
import Providers from './providers'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  const { children } = props
  return <Providers>{children}</Providers>
}
