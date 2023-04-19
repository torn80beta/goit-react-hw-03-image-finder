import React from 'react';
import { StyledLoadMoreButton } from './LoadMoreButton.styled';

export const LoadMoreButton = ({ onClick }) => {
  return (
    <StyledLoadMoreButton type="button" onClick={onClick}>
      Load more
    </StyledLoadMoreButton>
  );
};
