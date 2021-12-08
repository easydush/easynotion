import { CREATE_SECTION, DELETE_SECTION } from '../types/section';
import { Section } from 'types';

export const create = (data: Section) => {
  return {
    type: CREATE_SECTION,
    payload: data,
  };
};


export const remove = (id: Section['id']) => {
  return {
    type: DELETE_SECTION,
    payload: id,
  };
};
