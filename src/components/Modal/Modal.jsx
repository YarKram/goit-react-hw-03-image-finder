import { Overlay, ModalWindow } from './Modal.styled';

const Modal = ({ image, toggle, tags }) => {
  return (
    <Overlay onClick={toggle}>
      <ModalWindow>
        <img src={image} alt={tags} />
      </ModalWindow>
    </Overlay>
  );
};

export default Modal;
