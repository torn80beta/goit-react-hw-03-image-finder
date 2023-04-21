import React, { Component } from 'react';
import { StyledImageGalleryUl, StyledLoadSpinner } from './ImageGallery.styled';
import UrlCreator from 'api/UrlCreator';
import { fetchUrl } from 'api/FetchUrl';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
import { ThreeDots } from 'react-loader-spinner';
import { scroll } from 'utils/scroll';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export const urlCreator = new UrlCreator();

class ImageGallery extends Component {
  state = {
    data: [],
    loading: false,
    error: null,
    totalHits: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ loading: true });
      setTimeout(() => {
        fetchUrl(urlCreator.getUrl(this.props.searchQuery))
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

    if (
      this.state.data &&
      this.state.data.length > 0 &&
      prevState.data !== this.state.data
    ) {
      scroll();
    }
  }

  handleLoadMore = () => {
    // console.log(this.props.searchQuery);
    const newUrl = urlCreator.getUrl(
      this.props.searchQuery,
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
          scroll();
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }, 250);
    // .then(console.log(this.state.data));
  };

  render() {
    const { data, error, totalHits } = this.state;
    const { onImageClick } = this.props;

    return (
      <>
        <StyledImageGalleryUl className="gallery">
          {data &&
            data.map(item => (
              <ImageGalleryItem
                key={item.id}
                data={item}
                onImageClick={onImageClick}
              />
            ))}
        </StyledImageGalleryUl>
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
      </>
    );
  }
}

export default ImageGallery;

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
