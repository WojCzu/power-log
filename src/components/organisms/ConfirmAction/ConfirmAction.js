import { Button } from 'components/atoms/Button/Button';
import Modal from 'components/molecules/Modal/Modal';
import React from 'react';
import { ButtonsWrapper, StyledDescription } from './ConfirmAction.styles';

const ConfirmAction = ({ closeModal, handleConfirm, children, ...props }) => {
  return (
    <Modal
      closeModal={closeModal}
      titleButtons={[{ icon: 'cross', text: 'close modal', fn: closeModal }]}
      {...props}
    >
      <StyledDescription>{children}</StyledDescription>
      <ButtonsWrapper>
        <Button onClick={closeModal}>cancel</Button>
        <Button $isPrimary onClick={handleConfirm}>
          confirm
        </Button>
      </ButtonsWrapper>
    </Modal>
  );
};

export default ConfirmAction;
