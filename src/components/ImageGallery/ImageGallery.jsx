import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { ImageGalleryList } from './ImageGallery.styled';
import { fetchPictures } from 'api/picturesApi';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

class ImageGallery extends Component {
  state = {
    status: 'idle',
    images: [],
    page: this.props.page,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, search } = this.props;

    if (search !== prevProps.search) {
      this.setState({ status: 'pending' });
      this.fetchPics();
    }

    if (page > prevProps.page) {
      this.setState({ status: 'pending' });
      this.loadMore();
    }
  }

  fetchPics = () => {
    const { search, page } = this.props;

    fetchPictures(page, search)
      .then(res => {
        this.setState({
          images: res.data.hits,
          status: 'resolved',
        });
      })
      .catch(error => console.log(error));
  };

  loadMore = () => {
    const { search, page } = this.props;

    fetchPictures(page, search)
      .then(res => {
        this.setState(prevState => ({
          images: [...prevState.images, ...res.data.hits],
          status: 'resolved',
        }));
      })
      .catch(error => console.log(error));
  };

  render() {
    const { images, loading, status } = this.state;
    const { loadMore, search } = this.props;
    return (
      <>
        {search !== '' && (
          <ImageGalleryList>
            {images.map(image => {
              return <ImageGalleryItem key={image.id} data={image} />;
            })}
          </ImageGalleryList>
        )}

        {status === 'pending' && <Loader />}
        {status === 'resolved' && <Button loadMore={loadMore} />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  page: PropTypes.number.isRequired,
  search: PropTypes.string.isRequired,
};

export default ImageGallery;
