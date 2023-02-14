import PropTypes from 'prop-types';

import { Component } from 'react';
import { ImageItem, ImageGalleryItemImage } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const {
      data: { webformatURL, largeImageURL, tags },
    } = this.props;
    const { showModal } = this.state;

    return (
      <>
        <ImageItem onClick={this.openModal}>
          <ImageGalleryItemImage src={webformatURL} alt={tags} />
        </ImageItem>
        {showModal && (
          <Modal close={this.closeModal} image={largeImageURL} tags={tags} />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  data: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
