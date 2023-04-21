import React, { Component } from 'react';
import { StyledImageGalleryUl } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { scroll } from 'utils/scroll';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  state = {
    data: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      this.setState({
        data: this.props.data,
      });
    }

    if (
      this.state.data &&
      this.state.data.length > 0 &&
      prevState.data !== this.state.data
    ) {
      scroll();
    }
  }

  render() {
    const { data } = this.state;
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
      </>
    );
  }
}

export default ImageGallery;

ImageGalleryItem.propTypes = {
  onImageClick: PropTypes.func.isRequired,
};
