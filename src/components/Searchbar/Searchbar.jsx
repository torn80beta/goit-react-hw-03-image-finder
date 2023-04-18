import React from 'react';
import {
  StyledSearForm,
  StyledLogo,
  StyledInput,
  StyledSearchButton,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const handleSearchSubmit = e => {
    e.preventDefault();
    // console.log(onSubmit);
    const searchQuery = e.currentTarget.elements.searchQuery.value;
    onSubmit(searchQuery);
  };

  return (
    <header id="top" className="searchbar">
      <StyledSearForm onSubmit={handleSearchSubmit}>
        <StyledLogo>PiXplorer</StyledLogo>
        <StyledInput
          type="text"
          name="searchQuery"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos..."
        />
        <StyledSearchButton className="button" type="submit">
          Search
        </StyledSearchButton>
      </StyledSearForm>
    </header>
  );
};

export default Searchbar;
