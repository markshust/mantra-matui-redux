import routeRootName from '../libs/route-root-name';

export default {
  setTitle({ Store }, title) {
    return Store.dispatch({
      type: 'SET_HEADER_TITLE',
      title: routeRootName(title),
    });
  },
};
