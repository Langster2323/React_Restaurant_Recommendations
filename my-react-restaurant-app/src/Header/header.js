import React from 'react';
import PropTypes from 'prop-types';

import RestaurantInputForm from './restaurant-input-form';

const Header = ({ newGuestSubmitHandler, pendingGuest, handleNameInput }) =>
  <header>
    <h1>R.R</h1>
    <RestaurantInputForm
    newGuestSubmitHandler={newGuestSubmitHandler}
    pendingGuest={pendingGuest}
    handleNameInput={handleNameInput} />
  </header>

  Header.propTypes = {
    newGuestSubmitHandler: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
    handleNameInput: PropTypes.func.isRequired
  };

  export default Header;
