import React from 'react';
import { Wrapper, StyledSummary, Content } from './Accordion.styles';

const Accordion = ({ title, children, ...props }) => {
  return (
    <Wrapper open>
      <StyledSummary {...props}>{title}</StyledSummary>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Accordion;
