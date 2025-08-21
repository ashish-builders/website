import { PayloadRequest } from 'payload'

type IsAuthenticated = ({ req }: { req: PayloadRequest }) => boolean

export const authenticated: IsAuthenticated = ({ req: { user } }) => {
  return Boolean(user)
}

export const admin: IsAuthenticated = ({ req: { user } }) => {
  return Boolean(user && user?.role === 'admin')
}

export const editor: IsAuthenticated = ({ req: { user } }) => {
  return Boolean(user && (user?.role === 'editor' || user?.role === 'admin'))
}

export const anyone: IsAuthenticated = () => true
