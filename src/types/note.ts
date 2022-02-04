export enum MediaType {
  'VIDEO' = 'VIDEO',
  'LINK' = 'LINK',
  'TEXT' = 'TEXT',
  'IMAGE' = 'IMAGE',
  'TABLE' = 'TABLE',
}

export interface Note {
  id: string;
  title: string;
  parentId: Note['id'];
  uri: string;
}

export interface Block {
  id: string;
  noteId: Note['id'];
  order: number;
  type: MediaType;
  content: string;
}
