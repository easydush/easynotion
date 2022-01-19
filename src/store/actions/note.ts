import { Note } from 'types';
import { NOTE_ACTIONS } from 'store/constants';

export const createNote = (data: Note) => {
  return {
    type: NOTE_ACTIONS.CREATE_NOTE,
    payload: { note: data },
  };
};

export const updateNote = (data: Note) => {
  return {
    type: NOTE_ACTIONS.UPDATE_NOTE,
    payload: { note: data },
  };
};

export const setCurrentNote = (noteId: Note['id'] | Note['uri']) => {
  return {
    type: NOTE_ACTIONS.SET_CURRENT_NOTE,
    payload: { id: noteId },
  };
};

export const clearCurrentNote = () => {
  return {
    type: NOTE_ACTIONS.CLEAR_CURRENT_NOTE,
    payload: null,
  };
};

export const removeNote = (id: Note['id']) => {
  return {
    type: NOTE_ACTIONS.DELETE_NOTE,
    payload: { id },
  };
};
