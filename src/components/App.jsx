import React from 'react';
import Searchbar from './Searchbar/Searchbar';
const { Component } = require('react');

class App extends Component {
  state = {
    query: '',
  };

  onSearchFormSubmit = searchQuery => {
    console.log(searchQuery);
    this.setState(
      { query: searchQuery }
      // () => console.log(this.state)
    );
  };

  render() {
    return <Searchbar onSubmit={this.onSearchFormSubmit} />;
  }
}

export default App;
