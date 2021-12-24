import { CREATE_BLOCK, UPDATE_BLOCK, DELETE_BLOCK, REORDER, MOVE } from '../types/block';
import { Block, Note } from 'types';

export const create = (data: Omit<Block, 'order'>) => {
  return {
    type: CREATE_BLOCK,
    payload: data,
  };
};

export const update = (data: Block) => {
  return {
    type: UPDATE_BLOCK,
    payload: data,
  };
};

export const remove = (id: Block['id']) => {
  return {
    type: DELETE_BLOCK,
    payload: id,
  };
};

export const reorder = (id: Note['id']) => {
  return {
    type: REORDER,
    payload: id,
  };
};

export const move = (id: Block['id'], up: boolean) => {
  return {
    type: MOVE,
    payload: { id: id, up: up },
  };
};
