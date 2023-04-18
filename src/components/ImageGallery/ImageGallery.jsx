import React, { Component } from 'react';
import { StyledImageGalleryUl } from './ImageGallery.styled';
import UrlCreator from 'api/UrlCreator';
import { fetchUrl } from 'api/FetchUrl';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

const urlCreator = new UrlCreator();

class ImageGallery extends Component {
  state = {
    data: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      console.log(`prevProps: ${prevProps.searchQuery}`);
      console.log(`newProps: ${this.props.searchQuery}`);
      console.log('Props not even');
      this.setState({ loading: true });
      setTimeout(() => {
        fetchUrl(urlCreator.getUrl(this.props.searchQuery, 1))
          .then(response => {
            this.setState({ data: response.hits }, () =>
              console.log(this.state.loading)
            );
            console.log(response);
          })
          .finally(() => this.setState({ loading: false }));
      }, 1000);
    }
  }

  // console.log(searchQuery);
  render() {
    const { data } = this.state;
    // console.log(data);

    return (
      <>
        <StyledImageGalleryUl>
          {data &&
            data.map(item => <ImageGalleryItem key={item.id} data={item} />)}
        </StyledImageGalleryUl>
        {this.state.loading && <div>Подгружаем текстуры...</div>}
      </>
    );
  }
}

export default ImageGallery;
