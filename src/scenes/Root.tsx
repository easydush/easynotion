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
          <Route path='/' component={Dashboard} key='dashboard' />
          <Redirect to='/dashboard' />
        </Switch>
      </Layout>
    </>
  );
};


export const rootComp = () => {

  return (
    <Switch>
      <Route component={Main} />
    </Switch>
  );
};
