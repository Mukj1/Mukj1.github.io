export const toPublicUrl = (path: string) => {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;

  return `${normalizedBase}${path.replace(/^\/+/, '')}`;
};
