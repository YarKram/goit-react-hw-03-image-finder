import { Component } from 'react';
import { ImageItem, ImageGalleryItemImage } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  onToggleModal = () => {
    this.setState(({ showModal }) => {
      return {
        showModal: !showModal,
      };
    });
  };

  render() {
    const {
      data: { webformatURL, id, largeImageURL, tags },
    } = this.props;
    const { showModal } = this.state;

    return (
      <>
        <ImageItem onClick={this.onToggleModal}>
          <ImageGalleryItemImage key={id} src={webformatURL} alt={tags} />
        </ImageItem>
        {showModal && (
          <Modal
            toggle={this.onToggleModal}
            image={largeImageURL}
            tags={tags}
          />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
