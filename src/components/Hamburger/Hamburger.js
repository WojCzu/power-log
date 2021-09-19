import React from 'react';
import { SrOnly } from 'components/SrOnly/SrOnly';
import { Wrapper, Box } from './Hamburger.styles';

const Hamburger = ({ handleClick, isOpen, hamburgerRef }) => {
  return (
    <Wrapper onClick={handleClick} ref={hamburgerRef}>
      <SrOnly>{isOpen ? 'Close menu' : 'Open menu'}</SrOnly>
      <Box isOpen={isOpen}>
        <span></span>
      </Box>
    </Wrapper>
  );
};

export default Hamburger;
