import { Note } from 'types';
import { NOTE_ACTIONS} from 'store/constants';

export const create = (data: Note) => {
  return {
    type: NOTE_ACTIONS.CREATE,
    payload: data,
  };
};

export const update = (data: Note) => {
  return {
    type: NOTE_ACTIONS.UPDATE,
    payload: data,
  };
};

export const setCurrent = (noteId: Note['id'] | Note['uri']) => {
  return {
    type: NOTE_ACTIONS.SET_CURRENT_NOTE,
    payload: noteId,
  };
};

export const remove = (id: Note['id']) => {
  return {
    type: NOTE_ACTIONS.DELETE,
    payload: id,
  };
};
