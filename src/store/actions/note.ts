import { CREATE, UPDATE, DELETE } from '../types/note';
import { Note } from 'types';

export const create = (data: Note) => {
  return {
    type: CREATE,
    payload: data,
  };
};

export const remove = (id: number) => {
  return {
    type: DELETE,
    payload: null,
  };
};
