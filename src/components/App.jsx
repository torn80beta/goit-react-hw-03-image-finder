import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { Component } = require('react');

class App extends Component {
  state = {
    query: '',
  };

  onSearchFormSubmit = searchQuery => {
    // console.log(searchQuery);
    this.setState(
      { query: searchQuery }
      // , () => console.log(this.state)
    );
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSearchFormSubmit} />
        <ImageGallery searchQuery={this.state.query} />
        <ToastContainer />
      </>
    );
  }
}

export default App;