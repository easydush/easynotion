import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Log } from 'tools';
import { rootComp } from 'scenes/Root';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/store';

Log.logger = console;


const AppFn = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          {rootComp()}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default AppFn;
