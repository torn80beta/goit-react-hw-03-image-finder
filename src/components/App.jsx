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

  openModal = (url, tags) => {
    this.setState(({ modalOpen }) => ({
      modalOpen: !modalOpen,
      largeImgUrl: url,
      tags: tags,
    }));
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  onSearchFormSubmit = searchQuery => {
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
          onImageClick={this.openModal}
        />
        <ToastContainer />
        {this.state.modalOpen && (
          <Modal closeModal={this.closeModal}>
            <img
              className="modal-image"
              src={this.state.largeImgUrl}
              alt={this.state.tags}
            />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
