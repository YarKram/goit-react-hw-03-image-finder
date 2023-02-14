import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { ImageGalleryList } from './ImageGallery.styled';
import { fetchPictures } from 'components/Api/picturesApi';
import Loader from 'components/Loader/Loader';

class ImageGallery extends Component {
  state = {
    loading: false,
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, search } = this.props;

    if (search !== prevProps.search) {
      this.setState({ loading: true });
      this.loadMore();
    }

    if (page > prevProps.page) {
      this.setState({ loading: true });
      this.fetchPics();
    }
  }

  fetchPics = () => {
    const { search, page } = this.props;

    fetchPictures(page, search)
      .then(res => {
        this.setState(prevState => ({
          images: [...prevState.images, ...res.data.hits],
          loading: false,
        }));
      })
      .catch(error => console.log(error));
  };

  loadMore = () => {
    const { search, page } = this.props;

    fetchPictures(page, search)
      .then(res => {
        this.setState({
          images: res.data.hits,
          loading: false,
          page: 1,
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    const { images, loading } = this.state;
    return (
      <>
        <ImageGalleryList>
          {images.map(image => {
            return <ImageGalleryItem key={image.id} data={image} />;
          })}
        </ImageGalleryList>

        {loading && <Loader />}
      </>
    );
  }
}

export default ImageGallery;
