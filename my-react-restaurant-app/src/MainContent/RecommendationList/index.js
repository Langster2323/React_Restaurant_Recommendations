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
    handleConfirmation={ () => props.toggleConfirmationAt(restaurant.id) }
    handleToggleEditing={ () => props.toggleEditingAt(restaurant.id) }
    setName={text => props.setNameAt(text, restaurant.id)}
    handleRemove={() => props.removeRecommendationAt(restaurant.id)} />
    )}
  </ul>;

  RecommendationList.propTypes = {
    restaurants: PropTypes.array.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    removeRecommendationAt: PropTypes.func.isRequired,
    pendingRestaurant: PropTypes.string.isRequired
  };

export default RecommendationList;
