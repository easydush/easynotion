import { CREATE, UPDATE, DELETE } from '../types/block';
import { Block } from 'types';

export const create = (data: Block) => {
  return {
    type: CREATE,
    payload: data,
  };
};

export const update = (data: Block) => {
  return {
    type: UPDATE,
    payload: data,
  };
};

export const remove = (id: Block['id']) => {
  return {
    type: DELETE,
    payload: id,
  };
};
