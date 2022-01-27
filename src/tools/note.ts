import { Note } from 'types';

export const findNoteById = (notes: Note[], id: Note['id']) => notes.find((note: Note) => note.id === id || note.uri === id);
export const excludeNote = (notes: Note[], id: Note['id']) => notes.filter((note: Note) => note.id !== id);
export const excludeNoteWithChildren = (notes: Note[], id: Note['id']) => notes.filter((note: Note) => note.id !== id && note.parentId !== id);

export const excludeNotesChildren = (notes: Note[], id: Note['id']) => {
  let filtered = notes.filter(note => note.id !== id && !note.parentId).map(item=>item.id);
  notes.forEach(note => {
    if (filtered.includes(note.parentId) && note.id !== id) filtered.push(note.id);
  });
  
  return notes.filter(note=>filtered.includes(note.id));
};
