import IconButton from 'components/atoms/IconButton/IconButton';
import React from 'react';
import { StyledModal } from './Modal.styles';
import { ModalHeading, TitleButtons, Content } from './Modal.styles';

const Modal = ({
  children,
  modalTitle,
  titleButtons,
  closeModal,
  ...props
}) => {
  return (
    <StyledModal
      onRequestClose={closeModal}
      style={{
        overlay: { backgroundColor: 'rgba(0,0,0,0.7)', zIndex: '999' },
      }}
      {...props}
    >
      <ModalHeading>
        {modalTitle}
        <TitleButtons>
          {titleButtons?.map(({ icon, fn, text }) => (
            <IconButton key={text} icon={icon} onClick={fn}>
              {text}
            </IconButton>
          ))}
        </TitleButtons>
      </ModalHeading>
      <Content>{children}</Content>
    </StyledModal>
  );
};

StyledModal.setAppElement(document.getElementById('root'));

export default Modal;
