import React from 'react';
import { StyledLoadMoreButton } from './LoadMoreButton.styled';
import PropTypes from 'prop-types';

export const LoadMoreButton = ({ onClick }) => {
  return (
    <StyledLoadMoreButton type="button" onClick={onClick}>
      Load more
    </StyledLoadMoreButton>
  );
};

LoadMoreButton.propTypes = { onClick: PropTypes.func.isRequired };
