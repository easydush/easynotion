export const normalizeUri = (uri: string) =>
  uri.replace(/[^a-zA-Z0-9]/g, '_').replace(/_{2,}/g, '_');
