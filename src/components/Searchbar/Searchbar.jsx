import PropTypes from 'prop-types';

import { Component } from 'react';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import { ReactComponent as Search } from '../search.svg';

class Searchbar extends Component {
  state = {
    search: '',
  };

  onInputChange = evt => {
    this.setState({
      search: evt.currentTarget.value,
    });
  };

  onFormInputSubmit = evt => {
    evt.preventDefault();
    this.props.onFormSubmit(this.state.search);
  };

  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.onFormInputSubmit}>
          <SearchFormButton type="submit" className="button">
            <Search width="40" height="40" />
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

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
