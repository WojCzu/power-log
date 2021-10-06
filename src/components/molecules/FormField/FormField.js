import React from 'react';
import PropTypes from 'prop-types';
import Label from 'components/atoms/Label/Label';
import Input from 'components/atoms/Input/Input';
import { Wrapper } from './FormField.styles';
import { SrOnly } from 'components/atoms/SrOnly/SrOnly';

const FormField = ({
  label,
  id,
  name,
  type = 'text',
  value,
  children,
  isColumn,
  isLabelHidden,
  ...props
}) => (
  <Wrapper isColumn={isColumn} isLabelHidden={isLabelHidden} type={type}>
    <Label htmlFor={id} isBig={type === 'radio'}>
      {isLabelHidden ? <SrOnly>{label}</SrOnly> : label}
    </Label>
    <Input id={id} type={type} name={name} value={value} {...props} />
  </Wrapper>
);

export default FormField;

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
