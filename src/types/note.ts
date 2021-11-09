export type MediaType =
  | 'VIDEO'
  | 'LINK'
  | 'TEXT'
  | 'IMAGE'
  | 'TABLE'

export interface Note {
  id: string;
  title: string;
  description?: string;
}
