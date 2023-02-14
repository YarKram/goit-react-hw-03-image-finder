import PropTypes from 'prop-types';

import { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEsc);
  }

  closeByEsc = evt => {
    if (evt.code === 'Escape') {
      this.props.close();
    }
  };

  render() {
    const { image, close, tags } = this.props;
    return (
      <Overlay
        onClick={evt => {
          if (evt.currentTarget === evt.target) {
            return close();
          }
          return;
        }}
      >
        <ModalWindow>
          <img src={image} alt={tags} />
        </ModalWindow>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
};

export default Modal;
