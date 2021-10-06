import { Button } from 'components/atoms/Button/Button';
import React from 'react';
import Modal from './Modal';
import { Content, StyledDescription, ButtonsWrapper } from './Modal.styles';

const ModalConfirm = ({ closeModal, handleConfirm, children, ...props }) => {
  return (
    <Modal closeModal={closeModal} {...props}>
      <Content>
        <StyledDescription id="modal__description">
          {children}
        </StyledDescription>
        <ButtonsWrapper>
          <Button onClick={closeModal}>cancel</Button>
          <Button isPrimary onClick={handleConfirm}>
            confirm
          </Button>
        </ButtonsWrapper>
      </Content>
    </Modal>
  );
};

export default ModalConfirm;
