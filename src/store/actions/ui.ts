import { ACTIVATE, DEACTIVATE, DEACTIVATE_ALL } from '../types/ui';

export const activate = (flowName: string) => {
  return {
    type: ACTIVATE,
    payload: flowName,
  };
};

export const deactivate = (flowName: string) => {
  return {
    type: DEACTIVATE,
    payload: flowName,
  };
};


export const deactivateAll = () => {
  return {
    type: DEACTIVATE_ALL,
    payload: null,
  };
};
