import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Log } from 'tools';
import { rootComp } from 'scenes/Root';

import 'assets/scss/App.scss';

Log.logger = console;


const AppFn = () => {

  return (
    <Router>
      {rootComp()}
    </Router>
  );
};

export default AppFn;
