import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Log } from 'tools';
import { persistor, store } from 'store';
import { Dashboard } from 'scenes';
import { Layout } from 'components';

Log.logger = console;


const AppFn = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <Layout>
            <Routes>
              <Route path='*' key='dashboard' element={<Dashboard />} />
            </Routes>
          </Layout>
        </HashRouter>
      </PersistGate>
    </Provider>
  );
};

export default AppFn;
