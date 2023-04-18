import React from 'react';
import {
  StyledImageGalleryItemLi,
  StyledImageGalleryItemImg,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  data: { webformatURL, largeImageURL, tags },
}) => {
  //   console.log(largeImageURL);
  return (
    <StyledImageGalleryItemLi>
      {/* <a href={largeImageURL}> */}
      <StyledImageGalleryItemImg src={webformatURL} alt={tags} />
      {/* </a> */}
    </StyledImageGalleryItemLi>
  );
};
