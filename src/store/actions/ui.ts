import { FLOWS } from 'constants/flows';
import { UI_ACTIONS } from 'store/constants';

export const activateFlow = (flow: FLOWS) => {
  return {
    type: UI_ACTIONS.ACTIVATE_FLOW,
    payload: { flow },
  };
};

export const deactivateFlow = (flow: FLOWS) => {
  return {
    type: UI_ACTIONS.DEACTIVATE_FLOW,
    payload: { flow },
  };
};

export const deactivateAllFlows = () => {
  return {
    type: UI_ACTIONS.DEACTIVATE_ALL_FLOWS,
    payload: null,
  };
};
