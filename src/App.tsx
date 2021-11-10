import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Log } from 'tools';
import { rootComp } from 'scenes/Root';

//import 'assets/scss/App.scss';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/store';

Log.logger = console;


const AppFn = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          {rootComp()}
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default AppFn;
