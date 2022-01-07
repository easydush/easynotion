import { createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger';
import LocalStorage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import { rootReducer } from './reducers';

export const persistConfig = {
  key: 'note',
  storage: LocalStorage,
  stateReconciler: hardSet,
};

// @ts-ignore
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(logger),
);

// @ts-ignore
export let persistor = persistStore(store);
