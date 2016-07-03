import routeRootName from '../libs/route_root_name';

export default {
  setTitle({ Store }, title) {
    return Store.dispatch({
      type: 'SET_HEADER_TITLE',
      title: routeRootName(title),
    });
  },
};
