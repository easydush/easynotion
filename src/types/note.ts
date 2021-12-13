export type MediaType =
  | 'VIDEO'
  | 'LINK'
  | 'TEXT'
  | 'IMAGE'
  | 'TABLE'

export interface Note {
  id: string;
  title: string;
  parentId: Note['id'];
  uri?: string;
}

export interface Block {
  id: string;
  noteId: Note['id'];
  order: number;
  type: MediaType;
  content: string;
}

export const CREATE_NOTE = 'createNote';
export const EDIT_NOTE = 'editNote';
