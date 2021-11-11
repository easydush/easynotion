import { createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import LocalStorage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { noteReducer } from './reducers';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

export const persistConfig = {
  key: 'note',
  storage: LocalStorage,
  stateReconciler: hardSet,
};

// @ts-ignore
const persistedReducer = persistReducer(persistConfig, noteReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(logger),
);

// @ts-ignore
export let persistor = persistStore(store);
