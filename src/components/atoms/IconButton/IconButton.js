import React from 'react';
import { SrOnly } from 'components/atoms/SrOnly/SrOnly';
import { StyledButton } from './IconButton.styles';
import crossIcon from 'assets/icons/cross.svg';
import editIcon from 'assets/icons/edit.svg';

const IconButton = ({ children, icon, ...props }) => {
  let buttonIcon = null;
  switch (icon) {
    case 'edit':
      buttonIcon = editIcon;
      break;
    case 'cross':
    default:
      buttonIcon = crossIcon;
      break;
  }

  return (
    <StyledButton {...props} icon={buttonIcon}>
      {children && <SrOnly>{children}</SrOnly>}
    </StyledButton>
  );
};

export default IconButton;
