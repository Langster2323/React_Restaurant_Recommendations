import React from 'react';
import PropTypes from 'prop-types';

const RestaurantInputForm = ({ newRecommendationSubmitHandler, handleNameInput, pendingRestaurant }) =>
  <form onSubmit={newRecommendationSubmitHandler}>
      <input
      type="text"
      onChange={handleNameInput}
      value={pendingRestaurant}
      placeholder="Post Recommendations" />
      <button type="submit" name="submit" value="submit">Submit</button>
  </form>

  RestaurantInputForm.propTypes = {
    newRecommendationSubmitHandler: PropTypes.func.isRequired,
    pendingRestaurant: PropTypes.string.isRequired,
    handleNameInput: PropTypes.func.isRequired
  }

export default RestaurantInputForm;
