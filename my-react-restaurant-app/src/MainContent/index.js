import React from 'react';
import PropTypes from 'prop-types';

import ConfirmedFilter from './ConfirmedFilter';
import RecommendationList from './RecommendationList';
import Counter from './Counter';

const MainContent = props =>
<div className="main">
  <ConfirmedFilter
  toggleFilter={props.toggleFilter}
  isFiltered={props.isFiltered} />
  <Counter
  totalInvited={props.totalInvited}
  numberAttending={props.numberAttending}
  numberUnconfirmed={props.numberUnconfirmed} />
  <RecommendationList
  restaurants={props.restaurants}
  toggleConfirmationAt={props.toggleConfirmation}
  toggleEditingAt={this.toggleEditing}
  setNameAt={props.setName}
  isFiltered={props.isFiltered}
  removeRecommendationAt={props.removeRecommendation}
  pendingGuest={props.pendingGuest} />
</div>

MainContent.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  totalInvited: PropTypes.number.isRequired,
  numberAttending: PropTypes.number.isRequired,
  numberUnconfirmed: PropTypes.number.isRequired,
  restaurants: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  removeRecommendationAt: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
}

export default MainContent;
