import { Note } from 'types';
import { NOTE_ACTIONS} from 'store/constants';

export const createNote = (data: Note) => {
  return {
    type: NOTE_ACTIONS.CREATE,
    payload: data,
  };
};

export const updateNote = (data: Note) => {
  return {
    type: NOTE_ACTIONS.UPDATE,
    payload: data,
  };
};

export const setCurrentNote = (noteId: Note['id'] | Note['uri']) => {
  return {
    type: NOTE_ACTIONS.SET_CURRENT_NOTE,
    payload: noteId,
  };
};

export const removeNote = (id: Note['id']) => {
  return {
    type: NOTE_ACTIONS.DELETE,
    payload: id,
  };
};
