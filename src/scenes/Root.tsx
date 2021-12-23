import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Dashboard,
} from './index';
import { Layout } from 'components';

const Main = () => {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" key='dashboard' element={<Dashboard/>}/>
        </Routes>
      </Layout>
    </>
  );
};


export const rootComp = () => {

  return (
    <Routes>
      <Route path="/*" element={<Main />}/>
    </Routes>
  );
};
