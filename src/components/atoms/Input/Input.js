import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  TextInput,
  DateInput,
  RadioInput,
  StyledTextarea,
} from './Input.styles';

const Input = ({ type = 'text', ...props }) => {
  switch (type) {
    case 'text':
      return (
        <Wrapper>
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
