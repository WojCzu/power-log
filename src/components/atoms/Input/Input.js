import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  TextInput,
  DateInput,
  RadioInput,
  StyledTextarea,
} from './Input.styles';

const Input = ({ type = 'text', isDisabled, ...props }) => {
  switch (type) {
    case 'text':
    case 'number':
    case 'email':
    case 'password':
      return (
        <Wrapper isDisabled={isDisabled}>
          <TextInput type={type} disabled={isDisabled} {...props} />
        </Wrapper>
      );
    case 'date':
      return <DateInput type={type} disabled={isDisabled} {...props} />;
    case 'radio':
      return <RadioInput type={type} disabled={isDisabled} {...props} />;
    case 'textarea':
      return <StyledTextarea disabled={isDisabled} {...props} />;
    default:
      <input type={type} disabled={isDisabled} {...props} />;
  }
};

export default Input;

Input.propTypes = {
  type: PropTypes.string,
};
