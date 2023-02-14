import { Component } from 'react';
import { AppWrap } from './App.styled';
// import { RotatingTriangles } from 'react-loader-spinner';

import ImageGallery from '../ImageGallery/ImageGallery';
import Searchbar from '../Searchbar/Searchbar';
import Button from '../Button/Button';

class App extends Component {
  state = {
    search: '',
    page: 1,
  };

  onSubmit = data => {
    this.setState({ search: data });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { search, page } = this.state;

    return (
      <AppWrap>
        <Searchbar onFormSubmit={this.onSubmit} />

        <ImageGallery search={search} page={page} />
        {search !== '' && <Button loadMore={this.onLoadMore} />}
      </AppWrap>
    );
  }
}

export default App;
