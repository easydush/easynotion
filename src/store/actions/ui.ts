import { UI_ACTIONS } from 'store/constants';

export const activate = (flowName: string) => {
  return {
    type: UI_ACTIONS.ACTIVATE,
    payload: flowName,
  };
};

export const deactivate = (flowName: string) => {
  return {
    type: UI_ACTIONS.DEACTIVATE,
    payload: flowName,
  };
};


export const deactivateAll = () => {
  return {
    type: UI_ACTIONS.DEACTIVATE_ALL,
    payload: null,
  };
};
