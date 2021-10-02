import React from 'react';
import { Wrapper, StyledInput } from './Input.styles';

const Input = ({ ...props }) => (
  <Wrapper>
    <StyledInput {...props} />
  </Wrapper>
);

export default Input;
