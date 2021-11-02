import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  Dashboard,
} from './index';
import { URLWatcher } from '../tools';
import { Layout } from '../components/Layout/Layout';

const Main = () => {

  return (
    <>
      <URLWatcher />
      <Layout>
        <Switch>
          <Route path='/' component={Dashboard} key='dashboard' />
          <Redirect to='/dashboard' />
        </Switch>
      </Layout>
    </>
  );
};

interface RootProps {
}

export const rootComp = () => {

  return (
    <Switch>
      <Route component={Main} />
    </Switch>
  );
};
