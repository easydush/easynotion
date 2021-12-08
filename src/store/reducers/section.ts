import { CREATE_SECTION, DELETE_SECTION } from '../types/section';
import { DefaultActionParams } from '../types';
import { Section } from 'types';

const initialState = {
  sections: [],
};

export const sectionReducer =  (state = initialState, action: DefaultActionParams) => {

  switch (action.type) {

    case CREATE_SECTION:
      return { ...state, sections: [...state.sections, {...action.payload}] };


    case DELETE_SECTION:
      return { ...state, sections: [...state.sections.filter((section: Section) => section.id !== action.payload)] };

    default:
      return state;
  }
}
