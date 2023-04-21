import React from 'react';
import { toast } from 'react-toastify';
import { urlCreator } from 'components/App';
import {
  StyledSearForm,
  StyledLogo,
  StyledInput,
  StyledSearchButton,
} from './Searchbar.styled';
import PropTypes from 'prop-types';
const { Component } = require('react');

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    if (this.state.query === '') {
      toast.info('Enter your search query, please!', {
        position: 'top-center',
        autoClose: 2000,
        theme: 'colored',
      });
      return;
    }
    urlCreator.resetPage();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
    // console.log(onSubmit);
  };

  handleSearchChange = e => {
    // console.log(e.currentTarget.value);
    // const searchQuery = e.currentTarget.elements.searchQuery.value;
    this.setState(
      { query: e.currentTarget.value.trim().toLowerCase() }
      // , () =>
      // console.log(this.state)
    );
  };

  render() {
    return (
      <header id="top" className="searchbar">
        <StyledSearForm onSubmit={this.handleSearchSubmit}>
          <StyledLogo>PiXplorer</StyledLogo>
          <StyledInput
            type="text"
            name="searchQuery"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos..."
            value={this.state.query}
            onChange={this.handleSearchChange}
          />
          <StyledSearchButton className="button" type="submit">
            Search
          </StyledSearchButton>
        </StyledSearForm>
      </header>
    );
  }
}

export default Searchbar;

StyledInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

StyledSearForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
