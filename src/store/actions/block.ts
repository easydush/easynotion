import { CREATE, UPDATE, DELETE } from '../types/note';
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

export const remove = (id: number) => {
  return {
    type: DELETE,
    payload: id,
  };
};
