import { combineReducers } from 'redux';
import { uiReducer } from './ui';
import { blockReducer } from './block';
import { noteReducer } from './note';

export * from './note';
export * from './block';
export * from './ui';

export const rootReducer = combineReducers({ note: noteReducer,
  block: blockReducer, ui: uiReducer
});
