import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import ScrollUpButton from './ScrollUpButton/ScrollUpButton';
import { fetchUrl } from 'api/FetchUrl';
import UrlCreator from 'api/UrlCreator';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
import { StyledLoadSpinner } from './LoadSpinner/LoadSpinner.styled';
import { ThreeDots } from 'react-loader-spinner';
const { Component } = require('react');
export const urlCreator = new UrlCreator();

class App extends Component {
  state = {
    data: [],
    totalHits: 0,
    loading: false,
    error: null,
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

  handleLoadMore = () => {
    // console.log(this.props.searchQuery);
    const newUrl = urlCreator.getUrl(
      this.state.query,
      urlCreator.incrementPage()
    );
    // console.log(newUrl);
    this.setState({ loading: true });
    setTimeout(() => {
      fetchUrl(newUrl)
        .then(response => {
          this.setState(prevState => ({
            data: [...prevState.data, ...response.hits],
          }));
          // scroll();
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }, 250);
    // .then(console.log(this.state.data));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ loading: true });
      setTimeout(() => {
        fetchUrl(urlCreator.getUrl(this.state.query))
          .then(response => {
            if (response.totalHits === 0) {
              toast.info("There's no images for your request.", {
                position: 'top-center',
                autoClose: 2000,
                theme: 'colored',
              });
            }
            this.setState(
              {
                data: response.hits,
                totalHits: response.totalHits,
              }
              // () => console.log(this.state.totalHits)
            );
          })
          .catch(error => this.setState({ error: error.message }))
          .finally(() => this.setState({ loading: false }));
      }, 250);
    }
  }

  render() {
    const { data, error, totalHits } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSearchFormSubmit} />
        <ImageGallery data={this.state.data} onImageClick={this.openModal} />
        {this.state.loading && (
          <StyledLoadSpinner>
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#ff853e"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </StyledLoadSpinner>
        )}
        {data.length > 0 && data.length < totalHits && (
          <LoadMoreButton onClick={this.handleLoadMore} />
        )}
        {error && <h2 style={{ textAlign: 'center' }}>{error}</h2>}
        <ToastContainer transition={Zoom} />
        {this.state.modalOpen && (
          <Modal closeModal={this.closeModal}>
            <img
              className="modal-image"
              src={this.state.largeImgUrl}
              alt={this.state.tags}
            />
          </Modal>
        )}
        <ScrollUpButton />
      </>
    );
  }
}

export default App;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

ImageGallery.propTypes = {
  data: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
