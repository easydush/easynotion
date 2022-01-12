import { Note, NoteState } from 'types';
import { NOTE_ACTIONS } from 'store/constants';
import { excludeNote, excludeNoteWithChildren, findNoteById } from 'tools/note';

const initialState = {
  notes: [],
  currentNote: null,
};

type NoteActionParams = {
  type: string,
  payload: {
    id: Note['id'],
    note: Note,
  }
}

export const noteReducer = (state: NoteState = initialState, action: NoteActionParams) => {
  switch (action.type) {
    case NOTE_ACTIONS.CREATE_NOTE:
      return { ...state, notes: [...state.notes, action.payload.note] };

    case NOTE_ACTIONS.UPDATE_NOTE:
      return {
        ...state,
        notes: [...excludeNote(state.notes, action.payload.note.id), action.payload],
      };

    case NOTE_ACTIONS.DELETE_NOTE:
      return {
        ...state,
        notes: excludeNoteWithChildren(state.notes, action.payload.id),
      };

    case NOTE_ACTIONS.SET_CURRENT_NOTE:
      return {
        ...state,
        currentNote: findNoteById(state.notes, action.payload.id),
      };

    default:
      return state;
  }
};
