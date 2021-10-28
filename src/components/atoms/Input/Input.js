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
          <TextInput type={type} {...props} />
        </Wrapper>
      );
    case 'date':
      return <DateInput type={type} {...props} />;
    case 'radio':
      return <RadioInput type={type} {...props} />;
    case 'textarea':
      return <StyledTextarea {...props} />;
    default:
      <input type={type} {...props} />;
  }
};

export default Input;

Input.propTypes = {
  type: PropTypes.string,
};
