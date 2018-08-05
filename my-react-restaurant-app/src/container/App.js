import React, { Component } from 'react';
import Header from '../components/header';
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
      </div>
    );
  }
}

export default App;
