import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { Component } = require('react');

class App extends Component {
  state = {
    query: '',
    modalOpen: false,
    largeImgUrl: '',
    tags: '',
  };

  handleModal = (url, tags) => {
    this.setState(({ modalOpen, largeImgUrl }) => ({
      modalOpen: !modalOpen,
      largeImgUrl: url,
      tags: tags,
    }));
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
        <ImageGallery
          searchQuery={this.state.query}
          onImageClick={this.handleModal}
        />
        <ToastContainer />
        {this.state.modalOpen && (
          <Modal src={this.state.largeImgUrl} tags={this.state.tags} />
        )}
      </>
    );
  }
}

export default App;
