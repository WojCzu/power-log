import React from 'react';
import { StyledModal } from './Modal.styles';
import { ModalHeading, StyledTitle, StyledButton } from './Modal.styles';

const Modal = ({ children, modalTitle, closeModal, ...props }) => {
  return (
    <StyledModal
      aria={{
        labelledby: 'modal__heading',
        describedby: 'modal__description',
      }}
      onRequestClose={closeModal}
      {...props}
      style={{
        overlay: { backgroundColor: 'rgba(0,0,0,0.7)', zIndex: '999' },
      }}
    >
      <ModalHeading>
        <StyledTitle id="modal__heading">{modalTitle}</StyledTitle>
        <StyledButton icon="cross" onClick={closeModal}>
          close modal
        </StyledButton>
      </ModalHeading>
      {children}
    </StyledModal>
  );
};

StyledModal.setAppElement(document.getElementById('root'));

export default Modal;
