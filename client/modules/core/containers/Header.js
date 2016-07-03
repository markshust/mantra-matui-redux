import { useDeps, composeAll } from 'mantra-core';
import composeWithRedux from '/client/modules/core/libs/with_redux';
import Header from '../components/Header';

const onPropsChange = ({ context }, onData) => {
  const { Store } = context();
  const { title } = Store.getState().header;

  onData(null, {
    title,
  });
};

export default composeAll(
  composeWithRedux(onPropsChange),
  useDeps(),
)(Header);
