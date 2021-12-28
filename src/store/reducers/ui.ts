import { UIState } from 'types';
import { DefaultActionParams } from 'store/types';
import { UI_ACTIONS } from 'store/constants';

const initialState = {
  flows: []
};

export const uiReducer = (state: UIState = initialState, action: DefaultActionParams) => {

  switch (action.type) {

    case UI_ACTIONS.ACTIVATE:
      return { ...state, flows: [...state.flows, action.payload] };

    case UI_ACTIONS.DEACTIVATE:
      return { ...state, flows: [...state.flows.filter((flow: string) => flow !== action.payload)] };

    case UI_ACTIONS.DEACTIVATE_ALL:
      return initialState;

    default:
      return state;
  }
};
