import React from 'react';
import PropTypes from 'prop-types';

import ConfirmedFilter from './ConfirmedFilter';
import RecommendationList from './RecommendationList';
import Counter from './Counter';

const MainContent = ({
  toggleFilter,
  isFiltered,
  totalInvited,
  numberAttending,
  numberUnconfirmed,
  restaurants,
  toggleConfirmation,
  toggleEditing,
  setName,
  removeRecommendation,
  pendingRestaurant }) =>
<div className="main">
  <ConfirmedFilter
  toggleFilter={toggleFilter}
  isFiltered={isFiltered} />
  <Counter
  totalInvited={totalInvited}
  numberAttending={numberAttending}
  numberUnconfirmed={numberUnconfirmed} />
  <RecommendationList
  restaurants={restaurants}
  toggleConfirmation={toggleConfirmation}
  toggleEditing={toggleEditing}
  setName={setName}
  isFiltered={isFiltered}
  removeRecommendation={removeRecommendation}
  pendingRestaurant={pendingRestaurant} />
</div>

MainContent.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  totalInvited: PropTypes.number.isRequired,
  numberAttending: PropTypes.number.isRequired,
  numberUnconfirmed: PropTypes.number.isRequired,
  restaurants: PropTypes.array.isRequired,
  toggleConfirmation: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  removeRecommendation: PropTypes.func.isRequired,
  pendingRestaurant: PropTypes.string.isRequired
}

export default MainContent;
