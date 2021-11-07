import { CREATE, UPDATE, DELETE } from '../types/note';
import { DefaultActionParams } from '../types';

const initialState = {
  notes: [],
};

export default (state = initialState, action: DefaultActionParams) => {
  switch (action.type) {

    case CREATE:
      return { ...state, ...action.payload };

    case UPDATE:
      return { ...initialState };

    case DELETE:
      return { ...initialState };

    default:
      return state;
  }
}
