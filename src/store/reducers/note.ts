import { CREATE, UPDATE, DELETE } from '../types/note';
import { DefaultActionParams } from '../types';
import { Note } from 'types';

const initialState = {
  notes: [],
};

export const noteReducer = (state = initialState, action: DefaultActionParams) => {

  switch (action.type) {

    case CREATE:
      return { ...state, notes: [...state.notes, { ...action.payload }] };

    case UPDATE:
      return {
        ...state,
        notes: [...state.notes.filter((note: Note) => note.id !== action.payload.id), { ...action.payload }],
      };

    case DELETE:
      return { ...state, notes: [...state.notes.filter((note: Note) => note.id !== action.payload)] };

    default:
      return state;
  }
};
