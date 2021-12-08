export type MediaType =
  | 'VIDEO'
  | 'LINK'
  | 'TEXT'
  | 'IMAGE'
  | 'TABLE'

export interface Section {
  id: string;
  title: string;
}

export interface Note {
  id: string;
  title: string;
  sectionId: Section['id'];
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
export const CREATE_SECTION = 'createSection';
