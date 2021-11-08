import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Log } from 'tools';
import { rootComp } from 'scenes/Root';

//import 'assets/scss/App.scss';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from 'store/store';
import persistStore from 'store/persistStore';

Log.logger = console;


const AppFn = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore}>
        <Router>
          {rootComp()}
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default AppFn;
