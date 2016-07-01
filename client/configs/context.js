import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { createStore } from 'redux';

export default function ({ reducers }) {
  const Store = createStore(reducers);

  return {
    Meteor,
    FlowRouter,
    Store,
    Tracker,
  };
}
