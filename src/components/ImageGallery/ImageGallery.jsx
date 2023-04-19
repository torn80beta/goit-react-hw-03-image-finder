import React, { Component } from 'react';
import { StyledImageGalleryUl, StyledLoadSpinner } from './ImageGallery.styled';
import UrlCreator from 'api/UrlCreator';
import { fetchUrl } from 'api/FetchUrl';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
import { ThreeDots } from 'react-loader-spinner';

const urlCreator = new UrlCreator();

class ImageGallery extends Component {
  state = {
    data: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      // console.log(`prevProps: ${prevProps.searchQuery}`);
      // console.log(`newProps: ${this.props.searchQuery}`);
      console.log('Props not even');
      this.setState({ loading: true });
      setTimeout(() => {
        fetchUrl(urlCreator.getUrl(this.props.searchQuery))
          .then(response => {
            this.setState(
              { data: response.hits }
              // , () =>
              // console.log(this.state.loading)
            );
            // console.log(response);
          })
          .finally(() => this.setState({ loading: false }));
      }, 1000);
    }
  }

  handleLoadMore = () => {
    // console.log(this.props.searchQuery);
    const newUrl = urlCreator.getUrl(
      this.props.searchQuery,
      urlCreator.incrementPage()
    );
    // console.log(newUrl);
    this.setState({ loading: true });
    setTimeout(() => {
      fetchUrl(newUrl)
        .then(response => {
          // console.log(response.hits);
          this.setState(prevState => ({
            data: [...prevState.data, ...response.hits],
          }));
        })
        .finally(() => this.setState({ loading: false }));
    }, 1000);
    // .then(console.log(this.state.data));
  };

  render() {
    const { data } = this.state;

    return (
      <>
        <StyledImageGalleryUl>
          {data &&
            data.map(item => <ImageGalleryItem key={item.id} data={item} />)}
        </StyledImageGalleryUl>
        {this.state.loading && (
          <StyledLoadSpinner>
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#ff853e"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </StyledLoadSpinner>
        )}
        {data && <LoadMoreButton onClick={this.handleLoadMore} />}
      </>
    );
  }
}

export default ImageGallery;
