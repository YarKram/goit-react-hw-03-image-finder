import { Component } from 'react';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { ReactComponent as Search } from '../search.svg';

class Searchbar extends Component {
  state = {
    image: '',
  };

  onInputChange = evt => {
    this.setState({
      image: evt.currentTarget.value,
    });
  };

  onFormInputSubmit = evt => {
    evt.preventDefault();
    this.props.onFormSubmit(this.state.image);
  };

  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.onFormInputSubmit}>
          <SearchFormButton type="submit" className="button">
            <SearchFormButtonLabel>
              <Search width="40" height="40" />
            </SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            name="name"
            onChange={this.onInputChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

export default Searchbar;
