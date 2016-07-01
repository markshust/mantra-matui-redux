import { createApp } from 'mantra-core';
import { combineReducers } from 'redux';
import initContext from './configs/context';

import coreModule from './modules/core';
import authModule from './modules/auth';

const reducers = combineReducers({
  ...coreModule.reducers,
  ...authModule.reducers,
});

const context = initContext({ reducers });
const app = createApp(context);

app.loadModule(coreModule);
app.loadModule(authModule);

app.init();
