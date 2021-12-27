import { Block, Note } from 'types';
import { BLOCK_ACTIONS } from 'store/constants';

export const create = (data: Omit<Block, 'order'>) => {
  return {
    type: BLOCK_ACTIONS.CREATE_BLOCK,
    payload: data,
  };
};

export const update = (data: Block) => {
  return {
    type: BLOCK_ACTIONS.UPDATE_BLOCK,
    payload: data,
  };
};

export const remove = (id: Block['id']) => {
  return {
    type: BLOCK_ACTIONS.DELETE_BLOCK,
    payload: id,
  };
};

export const removeAllByNoteId = (id: Note['id']) => {
  return {
    type: BLOCK_ACTIONS.DELETE_NOTE_BLOCKS,
    payload: id,
  };
};


export const reorder = (id: Note['id']) => {
  return {
    type: BLOCK_ACTIONS.REORDER,
    payload: id,
  };
};

export const move = (id: Block['id'], up: boolean) => {
  return {
    type: BLOCK_ACTIONS.MOVE,
    payload: { id: id, up: up },
  };
};
