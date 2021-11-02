import React from 'react';
import { Wrapper, StyledSummary, Content } from './Accordion.styles';
import IconButton from 'components/atoms/IconButton/IconButton';
import { useModal } from 'hooks/useModal';
import ConfirmAction from '../ConfirmAction/ConfirmAction';

const Accordion = ({
  title,
  children,
  hasDeleteButton,
  handleDelete,
  ...props
}) => {
  const { isModalOpen, toggleOpenModal } = useModal();
  return (
    <Wrapper open {...props}>
      <StyledSummary>
        {title}
        {hasDeleteButton && (
          <IconButton icon="cross" type="button" onClick={toggleOpenModal}>
            delete
          </IconButton>
        )}
      </StyledSummary>
      <Content>{children}</Content>
      {isModalOpen && (
        <ConfirmAction
          isOpen={isModalOpen}
          closeModal={toggleOpenModal}
          modalTitle="Delete exercise"
          handleConfirm={handleDelete}
        >
          {`Are you sure, you want to delete ${title} exercise?`}
        </ConfirmAction>
      )}
    </Wrapper>
  );
};

export default Accordion;
