import PropTypes from 'prop-types';

import { ButtonLoadMore } from './Button.styled';
const Button = ({ loadMore }) => {
  return (
    <ButtonLoadMore onClick={loadMore} type="button">
      Load more
    </ButtonLoadMore>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

export default Button;
