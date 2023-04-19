import styled from '@emotion/styled';

export const StyledImageGalleryUl = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 80px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledLoadSpinner = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
