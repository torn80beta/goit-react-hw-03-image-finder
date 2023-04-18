import React from 'react';
import { StyledImageGalleryUl } from './ImageGallery.styled';

const ImageGallery = ({ searchQuery }) => {
  console.log(searchQuery);
  return <StyledImageGalleryUl>{searchQuery}</StyledImageGalleryUl>;
};

export default ImageGallery;
