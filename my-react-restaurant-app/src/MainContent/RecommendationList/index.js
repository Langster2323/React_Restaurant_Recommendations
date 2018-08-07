import React from 'react';
import PropTypes from 'prop-types';

import Recommendation from './Recommendation';
import PendingRecommendation from './PendingRecommendation';

/*Sublist Component...
Successfully rendering itself
with data from the state.*/
const RecommendationList = props =>
/*toggleConfirmationAt... Closure...
*/
  <ul>
  <PendingRecommendation name={props.pendingRestaurant} />
  {props.restaurants
    .filter(restaurant => !props.isFiltered || restaurant.isConfirmed)
    .map((restaurant, index) =>
    <Recommendation
    key={index}
    name={restaurant.name}
    isConfirmed={restaurant.isConfirmed}
    isEditing={restaurant.isEditing}
    handleConfirmation={ () => props.toggleConfirmation(restaurant.id) }
    handleToggleEditing={ () => props.toggleEditing(restaurant.id) }
    setName={text => props.setName(text, restaurant.id)}
    handleRemove={() => props.removeRecommendation(restaurant.id)} />
    )}
  </ul>;

  RecommendationList.propTypes = {
    restaurants: PropTypes.array.isRequired,
    toggleConfirmation: PropTypes.func.isRequired,
    toggleEditing: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    removeRecommendation: PropTypes.func.isRequired,
    pendingRestaurant: PropTypes.string.isRequired
  };

export default RecommendationList;
