import React from 'react';
import PropTypes from 'prop-types';

const RestaurantInputForm = ({ newGuestSubmitHandler, handleNameInput, pendingRestaurant }) =>
  <form onSubmit={newGuestSubmitHandler}>
      <input
      type="text"
      onChange={handleNameInput}
      value={pendingRestaurant}
      placeholder="Post Recommendations" />
      <button type="submit" name="submit" value="submit">Submit</button>
  </form>

  RestaurantInputForm.propTypes = {
    newGuestSubmitHandler: PropTypes.func.isRequired,
    pendingRestaurant: PropTypes.string.isRequired,
    handleNameInput: PropTypes.func.isRequired
  }

export default RestaurantInputForm;
