import canUseDOM from '@/lib/can-use-dom'

const getClientSideURL = (): string => {
  let url = ''
  if (canUseDOM) {
    const { hostname, port, protocol } = window.location
    url = `${protocol}//${hostname}${port ? `:${port}` : ''}`
  } else if (process.env.PROJECT_PRODUCTION_URL) {
    url = `${process.env.PROJECT_PRODUCTION_URL}`
  } else if (process.env.NEXT_PUBLIC_SERVER_URL) {
    url = process.env.NEXT_PUBLIC_SERVER_URL
  }
  return url.endsWith('/') ? url.slice(0, -1) : url
}

export default getClientSideURL
