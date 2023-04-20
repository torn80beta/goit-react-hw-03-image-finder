import React, { Component } from 'react';
import { StyledOverlayDiv, StyledModalDiv } from './Modal.styled';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  handleEscKeydown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleMouseClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleEscKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscKeydown);
  }

  render() {
    const { children } = this.props;
    return createPortal(
      <StyledOverlayDiv onClick={this.handleMouseClick}>
        <StyledModalDiv>{children}</StyledModalDiv>
      </StyledOverlayDiv>,
      modalRoot
    );
  }
}

StyledOverlayDiv.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};
