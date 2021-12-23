import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  Dashboard,
} from './index';
import { Layout } from 'components';

const Main = () => {

  return (
    <>
      <Layout>
        <Switch>
          <Route path='/' key='dashboard'>{<Dashboard />}</Route>
          <Redirect to='/dashboard' />
        </Switch>
      </Layout>
    </>
  );
};


export const rootComp = () => {

  return (
    <Switch>
      <Route>{<Main />}</Route>
    </Switch>
  );
};
