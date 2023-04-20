import React from 'react';
import {
  StyledImageGalleryItemLi,
  StyledImageGalleryItemImg,
} from './ImageGalleryItem.styled';

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
