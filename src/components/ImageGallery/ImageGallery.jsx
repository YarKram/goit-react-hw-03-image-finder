import axios from 'axios';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { ImageGalleryList } from './ImageGallery.styled';
import { RotatingTriangles } from 'react-loader-spinner';

class ImageGallery extends Component {
  state = {
    images: [],
    // loading: false,
  };

  // componentDidMount() {
  //   this.setState({ loading: true });

  //   axios
  //     .get(
  //       `https://pixabay.com/api/?key=32445976-19b17560e96f7fd808d7c3843&q&q=${this.props.search}&page=${this.props.page}&image_type=photo&orientation=horizontal&per_page=12`
  //     )
  //     .then(res => {
  //       this.setState({
  //         images: res.data.hits,
  //       });
  //     })
  //     .finally(() => {
  //       this.setState({ loading: false });
  //     });
  // }

  componentDidUpdate(prevProps) {
    axios
      .get(
        `https://pixabay.com/api/?key=32445976-19b17560e96f7fd808d7c3843&q&q=${this.props.search}&page=${this.props.page}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(res => {
        const currentSearch = this.props.search;
        const currentPage = this.props.page;

        if (currentSearch !== prevProps.search) {
          return this.setState({
            images: res.data.hits,
          });
        }

        if (currentPage > prevProps.page) {
          return this.setState(prevState => ({
            images: [...prevState.images, ...res.data.hits],
          }));
        }
      });
    // .finally(() => {
    //   this.setState({ loading: false });
    // });
  }

  render() {
    const { images, loading } = this.state;
    return (
      <>
        {loading && (
          <RotatingTriangles
            visible={true}
            height="80"
            width="80"
            ariaLabel="rotating-triangels-loading"
            wrapperStyle={{}}
            wrapperClass="rotating-triangels-wrapper"
          />
        )}
        <ImageGalleryList>
          {images.map(image => {
            return <ImageGalleryItem key={image.id} data={image} />;
          })}
        </ImageGalleryList>
      </>
    );
  }
}

export default ImageGallery;
