import { Component } from 'react';
import { AppWrap } from './App.styled';
// import { RotatingTriangles } from 'react-loader-spinner';

import ImageGallery from '../ImageGallery/ImageGallery';
import Searchbar from '../Searchbar/Searchbar';
import Button from '../Button/Button';

class App extends Component {
  state = {
    images: '',
    page: 1,
    loading: false,
  };

  onSubmit = data => {
    this.setState({ images: data });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, page, loading } = this.state;

    return (
      <AppWrap>
        <Searchbar onFormSubmit={this.onSubmit} />

        <ImageGallery loadingState={loading} search={images} page={page} />
        <Button loadMore={this.onLoadMore} />
      </AppWrap>
    );
  }
}

export default App;
