import React from 'react';
import { StyledOverlayDiv, StyledModalDiv } from './Modal.styled';

export const Modal = ({ src, tags }) => {
  console.log(src, tags);
  return (
    <StyledOverlayDiv>
      <StyledModalDiv>
        <img src={src} alt={tags} />
      </StyledModalDiv>
    </StyledOverlayDiv>
  );
};
