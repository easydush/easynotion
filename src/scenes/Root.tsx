import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Dashboard,
} from './index';
import { Layout } from 'components';


export const rootComp = () => {

  return (
    <Layout>
      <Routes>
        <Route path='*' key='dashboard' element={<Dashboard />} />
      </Routes>
    </Layout>
  );
};
