import { Note, RootState } from 'types';

export const allByNoteId = (noteId: Note['id']) => (state: RootState) => state.block.blocks.filter((item) => item.noteId === noteId);
