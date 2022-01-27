import { UIState } from 'types';
import { FLOWS } from 'constants/flows';
import { UI_ACTIONS } from 'store/constants';

const initialState = {
  flows: [],
};

type UIActionParams = {
  type: string;
  payload: {
    flow: FLOWS;
  };
};

export const uiReducer = (
  state: UIState = initialState,
  action: UIActionParams,
) => {
  switch (action.type) {
    case UI_ACTIONS.ACTIVATE_FLOW:
      return { flows: [...state.flows, action.payload.flow] };

    case UI_ACTIONS.DEACTIVATE_FLOW:
      return {
        flows: [...state.flows.filter((flow) => flow !== action.payload.flow)],
      };

    case UI_ACTIONS.DEACTIVATE_ALL_FLOWS:
      return initialState;

    default:
      return state;
  }
};
