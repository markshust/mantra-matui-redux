import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';

const Logout = ({ logout }) => (
  <FlatButton onClick={logout}>Logout</FlatButton>
);

Logout.propTypes = {
  logout: PropTypes.func,
};

export default Logout;
