import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Dashboard } from 'scenes';
import { Layout } from 'components';
import { persistor, store } from 'store';

const AppFn = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <Layout>
            <Dashboard />
          </Layout>
        </HashRouter>
      </PersistGate>
    </Provider>
  );
};

export default AppFn;
