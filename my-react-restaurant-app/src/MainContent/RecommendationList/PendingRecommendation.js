import React from 'react';
import PropTypes from 'prop-types';

const PendingRecommendation = props => {
  if(props.name) {
    return (
    <li className="pending">
      <span>
      {props.name}
      </span>
    </li>
    );
  }
  return null;
};

PendingRecommendation.propTypes = {
  name: PropTypes.string.isRequired
};

export default PendingRecommendation;
