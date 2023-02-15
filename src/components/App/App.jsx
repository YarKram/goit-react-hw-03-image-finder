import { Component } from 'react';
import { AppWrap } from './App.styled';

import ImageGallery from '../ImageGallery/ImageGallery';
import Searchbar from '../Searchbar/Searchbar';

class App extends Component {
  state = {
    search: '',
    page: 1,
  };

  onSubmit = data => {
    this.setState({ search: data, page: 1 });
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
        <ImageGallery search={search} page={page} loadMore={this.onLoadMore} />
      </AppWrap>
    );
  }
}

export default App;
