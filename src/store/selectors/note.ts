import { Note, RootState } from 'types';

export const current = (state: RootState) => state.note.currentNote;
export const all = (state: RootState) => state.note.notes || [];
export const byId = (id: Note['id']) => (state: RootState) => state.note.notes.find(item => item.id === id);
