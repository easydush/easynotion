import { Block, Note } from 'types';
import { BLOCK_ACTIONS, NOTE_ACTIONS } from 'store/constants';

export const createBlock = (data: Omit<Block, 'order'>) => {
  return {
    type: BLOCK_ACTIONS.CREATE_BLOCK,
    payload: { block: data },
  };
};

export const updateBlock = (data: Block) => {
  return {
    type: BLOCK_ACTIONS.UPDATE_BLOCK,
    payload: { block: data },
  };
};

export const removeBlock = (id: Block['id']) => {
  return {
    type: BLOCK_ACTIONS.DELETE_BLOCK,
    payload: { id },
  };
};

export const removeAllBlocksByNoteId = (id: Note['id']) => {
  return {
    type: BLOCK_ACTIONS.DELETE_NOTE_BLOCKS,
    payload: { noteId: id },
  };
};


export const reorderBlocks = (id: Note['id']) => {
  return {
    type: BLOCK_ACTIONS.REORDER_BLOCKS,
    payload: { noteId: id },
  };
};

export const moveBlock = (id: Block['id'], up: boolean) => {
  return {
    type: BLOCK_ACTIONS.MOVE_BLOCK,
    payload: { id, up },
  };
};

export const setCurrentBlock = (id: Block['id']) => {
  return {
    type: BLOCK_ACTIONS.SET_CURRENT_BLOCK,
    payload: { id },
  };
};

export const clearCurrentBlock = () => {
  return {
    type: BLOCK_ACTIONS.CLEAR_CURRENT_BLOCK,
    payload: null,
  };
};
