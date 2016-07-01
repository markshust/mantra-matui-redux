import actions from './actions';
import reactions from './reactions';
import reducers from './reducers';
import routes from './routes';

export default {
  actions,
  reducers,
  routes,
  load(_context, _actions) {
    reactions.header(_context, _actions);
  },
};
