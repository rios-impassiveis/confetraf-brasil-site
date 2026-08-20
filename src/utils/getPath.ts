/**
 * Prefixes an internal path with the configured base path (`astro.config.ts`'s
 * `base`), which Astro does NOT do automatically for hardcoded href/src strings.
 * Needed because this site is deployed under a GitHub Pages project subpath
 * (e.g. /confetraf-brasil-site/) rather than the domain root.
 * Absolute URLs (http/https) are returned unchanged.
 */
export function withBase(path: string): string {
  if (/^https?:\/\//.test(path)) return path;

  const base = import.meta.env.BASE_URL;
  return path.startsWith("/") ? `${base}${path.slice(1)}` : `${base}${path}`;
}
