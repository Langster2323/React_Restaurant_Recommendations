import React, { Component } from 'react';
import Header from '../Header/header';
import MainContent from '../MainContent';
import SimpleMap from './SimpleMap';

import '../App.css';

class App extends Component {
  state = {
    isFiltered: false,
    pendingRestaurant: "",
    restaurants: [],
    maptype: 'roadmap',
    place_formatted: '',
    place_id: '',
    place_location: '',
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

toggleFilter = () =>
    this.setState({ isFiltered: !this.state.isFiltered});

removeRecommendation = id =>
  this.setState({
    restaurants: this.state.restaurants.filter(restaurant => id !== restaurant.id)
  });
  // componentDidMount() {
  //   let map = new window.google.maps.Map(document.getElementById('map'), {
  //     mapTypeId: 'roadmap',
  //   });
  //
  //   map.addListener('zoom_changed', () => {
  //     this.setState({
  //       zoom: map.getZoom(),
  //     });
  //   });
  //
  //   map.addListener('maptypeid_changed', () => {
  //     this.setState({
  //       maptype: map.getMapTypeId(),
  //     });
  //   });
  //
  //   let marker = new window.google.maps.Marker({
  //     map: map,
  //     position: {lat: -33.8688, lng: 151.2195},
  //   });
  //
  //   // initialize the autocomplete functionality using the #pac-input input box
  //   let inputNode = document.getElementById('pac-input');
  //   map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(inputNode);
  //   let autoComplete = new window.google.maps.places.Autocomplete(inputNode);
  //
  //   autoComplete.addListener('place_changed', () => {
  //     let place = autoComplete.getPlace();
  //     let location = place.geometry.location;
  //
  //     this.setState({
  //       place_formatted: place.formatted_address,
  //       place_id: place.place_id,
  //       place_location: location.toString(),
  //     });
  //
  //     // bring the selected place in view on the map
  //     map.fitBounds(place.geometry.viewport);
  //     map.setCenter(location);
  //
  //     marker.setPlace({
  //       placeId: place.place_id,
  //       location: location,
  //     });
  //   });
  // }
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
        totalInvited={totalInvited}
        numberAttending={numberAttending}
        numberUnconfirmed={numberUnconfirmed}
        restaurants={this.state.restaurants}
        toggleConfirmation={this.toggleConfirmation}
        toggleEditing={this.toggleEditing}
        setName={this.setName}
        removeRecommendation={this.removeRecommendation}
        pendingRestaurant={this.state.pendingRestaurant}
        newRecommendationId={this.newRecommendationId} />

    <SimpleMap />
      </div>
    );
  }
}

export default App;
