import { UI_ACTIONS } from 'store/constants';
import { Note } from 'types';

export const activate = (flowName: string) => {
  return {
    type: UI_ACTIONS.ACTIVATE,
    payload: flowName,
  };
};

export const deactivate = (flowName: string) => {
  return {
    type: UI_ACTIONS.DEACTIVATE,
    payload: flowName,
  };
};


export const deactivateAll = () => {
  return {
    type: UI_ACTIONS.DEACTIVATE_ALL,
    payload: null,
  };
};

export const setCurrent = (noteId: Note['id']) => {
  return {
    type: UI_ACTIONS.SET_CURRENT_NOTE,
    payload: noteId,
  };
};

export const clearCurrent = () => {
  return {
    type: UI_ACTIONS.CLEAR,
    payload: null,
  };
};
