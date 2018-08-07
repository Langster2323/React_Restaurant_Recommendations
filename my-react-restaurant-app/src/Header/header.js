import React from 'react';
import PropTypes from 'prop-types';

import RestaurantInputForm from './restaurant-input-form';

const Header = ({ newRecommendationSubmitHandler, pendingRestaurant, handleNameInput }) =>
  <header>
    <h1>R.R</h1>
    <RestaurantInputForm
    newRecommendationSubmitHandler={newRecommendationSubmitHandler}
    pendingRestaurant={pendingRestaurant}
    handleNameInput={handleNameInput} />
  </header>

  Header.propTypes = {
    newRecommendationSubmitHandler: PropTypes.func.isRequired,
    pendingRestaurant: PropTypes.string.isRequired,
    handleNameInput: PropTypes.func.isRequired
  };

  export default Header;
