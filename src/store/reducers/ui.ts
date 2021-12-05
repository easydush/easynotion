import { UIState } from 'types';
import { ACTIVATE, DEACTIVATE, DEACTIVATE_ALL } from '../types/ui';
import { DefaultActionParams } from '../types';

const initialState = {
  flows: [],
};

export const uiReducer = (state: UIState = initialState, action: DefaultActionParams) => {

  switch (action.type) {

    case ACTIVATE:
      return { ...state, flows: [...state.flows, action.payload] };

    case DEACTIVATE:
      return { ...state, flows: [...state.flows.filter((flow: string) => flow !== action.payload)] };

    case DEACTIVATE_ALL:
      return initialState;

    default:
      return state;
  }
};
