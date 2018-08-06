import React from 'react';
import PropTypes from 'prop-types';

const ConfirmedFilter = props =>
  <div>
    <h2>Recommendations</h2>
    <label>
      <input
      type="checkbox"
      onChange={props.toggleFilter}
      checked={props.isFiltered} /> Hide those who have not responded
    </label>
  </div>

  ConfirmedFilter.propTypes = {
    toggleFilter: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired
  }

  export default ConfirmedFilter;
