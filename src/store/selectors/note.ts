import { Note, RootState } from 'types';
import { excludeNotesChildren } from 'tools/note';

export const current = (state: RootState) => state.note.currentNote;
export const all = (state: RootState) => state.note.notes || [];
export const byId = (id: Note['id']) => (state: RootState) =>
  state.note.notes.find((item) => item.id === id);
export const excludeChildren = (id: Note['id']) => (state: RootState) =>
  excludeNotesChildren(state.note.notes, id);
