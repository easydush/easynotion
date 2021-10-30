import React from 'react';
import { observer } from 'mobx-react';
import { HashRouter as Router } from 'react-router-dom';
import { userStore } from './store';
import { Log, authTools } from './tools';
import { rootComp } from './scenes/Root';

import './assets/scss/App.scss';

Log.logger = console;

authTools.authorizeLocal();

const AppFn = () => {
  const { isLogged } = userStore;

  return (
    <Router>
      {rootComp({ isLogged })}
    </Router>
  );
};

export default observer(AppFn);
