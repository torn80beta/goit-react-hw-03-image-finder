import React, { Component } from 'react';
import { StyledImageGalleryUl } from './ImageGallery.styled';
import axios from 'axios';
import UrlCreator from 'api/UrlCreator';

const urlCreator = new UrlCreator();

class ImageGallery extends Component {
  state = {
    data: null,
    loading: false,
  };

  async fetchUrl(targetUrl) {
    let data;
    try {
      const response = await axios.get(targetUrl).then(response => {
        data = response.data;
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      console.log(`prevProps: ${prevProps.searchQuery}`);
      console.log(`newProps: ${this.props.searchQuery}`);
      console.log('Props not even');
      this.setState({ loading: true });
      setTimeout(() => {
        this.fetchUrl(urlCreator.getUrl(this.props.searchQuery, 1))
          .then(response => {
            this.setState({ data: response }, () =>
              console.log(this.state.loading)
            );
            // console.log(response)
          })
          .finally(() => this.setState({ loading: false }));
      }, 2000);
    }
  }

  // console.log(searchQuery);
  render() {
    return (
      <>
        <StyledImageGalleryUl>{this.props.searchQuery}</StyledImageGalleryUl>
        {this.state.loading && <div>Подгружаем текстуры...</div>}
      </>
    );
  }
}

export default ImageGallery;
