import React from 'react';
import PropTypes from 'prop-types';

const ExpandRow = ({ children }) => (
  <tr>
    { children }
  </tr>
);

ExpandRow.propTypes = {
  children: PropTypes.node
};

ExpandRow.defaultProps = {
  children: null
};

export default ExpandRow;
