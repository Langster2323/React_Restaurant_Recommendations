import React, { Component } from 'react';
import Header from '../components/header';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import '../App.css';

class App extends Component {
  state = {
    isFiltered: false,
    pendingRestaurant: "",
    restaurants: [],
  };

  lastGuestId = 0;

newGuestId = () => {
  const id = this.lastGuestId;
  this.lastGuestId += 1;
  return id;
}

  handleNameInput = e => {
    this.setState({ pendingRestaurant: e.target.value });
  }

  newGuestSubmitHandler = e => {
      e.preventDefault();
      const id = this.newGuestId();
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

  render() {
    return (
      <div className="App">
      <Header
    pendingGuest={this.state.pendingGuest}
    newGuestSubmitHandler={this.newGuestSubmitHandler}
    handleNameInput={this.handleNameInput} />
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
  apiKey: ("AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo")
})(App)
