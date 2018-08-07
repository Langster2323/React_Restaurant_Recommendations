import React from 'react';
import PropTypes from 'prop-types';

const RecommendationName = props => {
  if (props.isEditing) {
    return (
      <input
      type="text"
      value={props.children}
      onChange={props.handleNameEdits} />
    );
  }
  return (
    <span>
    {props.children}
    </span>
  );
};

RecommendationName.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  handleNameEdits: PropTypes.func.isRequired
};

export default RecommendationName;
