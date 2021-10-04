import { CloseButton } from 'components/atoms/CloseButton/CloseButton';
import React from 'react';
import styled from 'styled-components';
import { StyledModal } from './Modal.styles';

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
        <StyledButton onClick={closeModal}>X</StyledButton>
      </ModalHeading>
      <Content>{children}</Content>
    </StyledModal>
  );
};

StyledModal.setAppElement(document.getElementById('root'));

export default Modal;

const ModalHeading = styled.div`
  padding: 0.4em;

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.purple};
  font-size: ${({ theme }) => theme.fontSize.l};
  border-bottom-right-radius: 0.8em;

  display: flex;
  align-items: center;
  transform: translateY(-1px);
  /* without this, part of the modal sticks out */
`;

const StyledTitle = styled.span`
  margin: 0 auto;
`;

const StyledButton = styled(CloseButton)`
  color: ${({ theme }) => theme.color.white};
  place-self: flex-end;
`;

const Content = styled.div`
  padding: 24px 16px;
`;
