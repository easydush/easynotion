import { UI_ACTIONS } from 'store/constants';

export const activateFlow = (flowName: string) => {
  return {
    type: UI_ACTIONS.ACTIVATE,
    payload: flowName,
  };
};

export const deactivateFlow = (flowName: string) => {
  return {
    type: UI_ACTIONS.DEACTIVATE,
    payload: flowName,
  };
};


export const deactivateAllFlows = () => {
  return {
    type: UI_ACTIONS.DEACTIVATE_ALL,
    payload: null,
  };
};

export const clearCurrentFlow = () => {
  return {
    type: UI_ACTIONS.CLEAR,
    payload: null,
  };
};
