import { Note, RootState } from 'types';
import { compareBlocks } from 'tools/blocks';

export const allByNoteId = (noteId: Note['id']) => (state: RootState) =>
  state.block.blocks
    .filter((item) => item.noteId === noteId)
    .sort(compareBlocks);
export const current = (state: RootState) => state.block.currentBlock;
