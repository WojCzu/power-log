import React from 'react';
import { Wrapper, StyledSummary, Content } from './Accordion.styles';
import { CloseButton } from 'components/atoms/CloseButton/CloseButton';

const Accordion = ({
  title,
  children,
  hasDeleteButton,
  handleDelete,
  ...props
}) => {
  return (
    <Wrapper open {...props}>
      <StyledSummary>
        {title}
        {hasDeleteButton && (
          <CloseButton type="button" onClick={handleDelete}>
            X
          </CloseButton>
        )}
      </StyledSummary>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Accordion;
