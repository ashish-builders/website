export function isExternal(href: string | undefined): boolean {
  if (typeof href !== 'string') {
    return false;
  }
  return (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:')
  );
}

export function matchPathname(pattern: string, pathname: string): boolean {
  let regexPattern = pattern
    .replace(/\[\[\.\.\.(\w+)\]\]/g, '(?:/.*)?') // [[...slug]]
    .replace(/\[\.\.\.(\w+)\]/g, '.*') // [...slug]
    .replace(/\[(\w+)\]/g, '[^/]+'); // [id]
  regexPattern = `^${regexPattern.replace(/\/$/, '')}$`;
  const regex = new RegExp(regexPattern);
  return regex.test(pathname);
}
