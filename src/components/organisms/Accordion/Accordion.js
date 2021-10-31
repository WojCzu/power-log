import React from 'react';
import { Wrapper, StyledSummary, Content } from './Accordion.styles';
import IconButton from 'components/atoms/IconButton/IconButton';

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
          <IconButton icon="cross" type="button" onClick={handleDelete}>
            delete
          </IconButton>
        )}
      </StyledSummary>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Accordion;
