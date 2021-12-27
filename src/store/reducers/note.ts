import { Note, NoteState } from 'types';
import { DefaultActionParams } from 'store/types';
import { NOTE_ACTIONS } from 'store/constants';

const initialState = {
  notes: [],
};

export const noteReducer = (state: NoteState = initialState, action: DefaultActionParams) => {

  switch (action.type) {

    case NOTE_ACTIONS.CREATE:
      return { ...state, notes: [...state.notes, { ...action.payload }] };

    case NOTE_ACTIONS.UPDATE:
      return {
        ...state,
        notes: [...state.notes.filter((note: Note) => note.id !== action.payload.id), { ...action.payload }],
      };

    case NOTE_ACTIONS.DELETE:
      return {
        ...state,
        notes: [...state.notes.filter((note: Note) => note.id !== action.payload && note.parentId !== action.payload)],
      };

    default:
      return state;
  }
};
