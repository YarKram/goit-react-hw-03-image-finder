import { ButtonLoadMore } from './Button.styled';
const Button = ({ loadMore }) => {
  return (
    <ButtonLoadMore onClick={loadMore} type="button">
      Load more
    </ButtonLoadMore>
  );
};

export default Button;
