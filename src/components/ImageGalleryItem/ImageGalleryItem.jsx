import React from 'react';
import {
  StyledImageGalleryItemLi,
  StyledImageGalleryItemImg,
} from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  data: { webformatURL, largeImageURL, tags },
  onImageClick,
}) => {
  return (
    <StyledImageGalleryItemLi>
      <StyledImageGalleryItemImg
        src={webformatURL}
        alt={tags}
        onClick={() => {
          onImageClick(largeImageURL, tags);
        }}
      />
    </StyledImageGalleryItemLi>
  );
};

ImageGalleryItem.propTypes = {
  data: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  onImageClick: PropTypes.func.isRequired,
};
