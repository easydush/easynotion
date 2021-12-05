import { CREATE_BLOCK, UPDATE_BLOCK, DELETE_BLOCK } from '../types/block';
import { Block } from 'types';

export const create = (data: Block) => {
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
