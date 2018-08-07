import React, { Component } from 'react';
import Header from '../Header/header';
import MainContent from '../MainContent';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import '../App.css';

class App extends Component {
  state = {
    isFiltered: false,
    pendingRestaurant: "",
    restaurants: [],
  };

  lastRecommendedId = 0;

newRecommendationId = () => {
  const id = this.lastRecommendedId;
  this.lastRecommendedId += 1;
  return id;
}

toggleRecommendationProperty = (property, id) =>
this.setState({
  restaurants: this.state.restaurants.map(restaurant => {
    if (id === restaurant.id) {
      return {
        ...restaurant,
        [property]: !restaurant[property]
      };
    }
    return restaurant;
  })
});

  handleNameInput = e => {
    this.setState({ pendingRestaurant: e.target.value });
  }

  toggleConfirmation = id =>
  this.toggleRecommendationProperty("isConfirmed", id);

    setName = (name, id) =>
    this.setState({
      restaurants: this.state.restaurants.map(restaurant => {
        if (id === restaurant.id) {
          return {
            ...restaurant,
            name
          };
        }
        return restaurant;
      })
    });

    toggleEditing = id =>
      this.toggleRecommendationProperty("isEditing", id);

  newRecommendationSubmitHandler = e => {
      e.preventDefault();
      const id = this.newRecommendationId();
      this.setState({
        restaurants: [
          {
            name: this.state.pendingRestaurant,
            isConfirmed: false,
            isEditing: false,
            id
          },
          ...this.state.restaurants
        ],
        pendingRestaurant: ''
      });
    }

    //Returns the length of the restaurant array in the state object...
getTotalInvited = () => this.state.restaurants.length;

getAttendingGuests = () => this.state.restaurants.reduce(
  (total, restaurant) => restaurant.isConfirmed ? total + 1 : total,
  0
);

removeRecommendation = id =>
  this.setState({
    restaurants: this.state.restaurants.filter(restaurant => id !== restaurant.id)
  });

  render() {
    const totalInvited= this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;
    return (
      <div className="App">
      <Header
    pendingRestaurant={this.state.pendingRestaurant}
    newRecommendationSubmitHandler={this.newRecommendationSubmitHandler}
    handleNameInput={this.handleNameInput} />
    <MainContent
        toggleFilter={this.toggleFilter}
        isFiltered={this.state.isFiltered}
        totalInvited={this.totalInvited}
        numberAttending={this.numberAttending}
        numberUnconfirmed={this.numberUnconfirmed}
        restaurants={this.state.restaurants}
        toggleConfirmation={this.toggleConfirmation}
        toggleEditing={this.toggleEditing}
        setName={this.setName}
        removeRecommendation={this.removeRecommendation}
        pendingRestaurant={this.state.pendingRestaurant}
        newRecommendationId={this.newRecommendationId} />
    <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCdFEcovdt77rU_GPdjNdoTKqrq1NXWU-s")
})(App)
