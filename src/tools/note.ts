import { Note } from 'types';

export const excludeNote = (notes: Note[], id: Note['id']) => notes.filter((note: Note) => note.id !== id);
export const excludeNoteWithChildren = (notes: Note[], id: Note['id']) => notes.filter((note: Note) => note.id !== id && note.parentId !== id);
export const findNoteById = (notes: Note[], id: Note['id']) => notes.find((note: Note) => note.id === id || note.uri === id);
