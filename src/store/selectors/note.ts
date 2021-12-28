import { RootState } from 'types';

export const current = (state: RootState) => state.note.currentNote;
export const all = (state: RootState) => state.note.notes || [];
