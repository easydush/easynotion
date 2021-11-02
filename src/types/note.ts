export type MediaType =
  | 'VIDEO'
  | 'LINK'
  | 'TEXT'
  | 'IMAGE'
  | 'TABLE'

export interface Note {
  title: string;
  description?: string;
}
