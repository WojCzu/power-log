import React from 'react';
import { Wrapper, StyledSummary } from './Accordion.styles';

const Accordion = ({ title, children, ...props }) => {
  return (
    <Wrapper open>
      <StyledSummary {...props}>{title}</StyledSummary>
      {children}
    </Wrapper>
  );
};

export default Accordion;
