import React from 'react';
import { Wrapper, Box } from './Hamburger.styles';

const Hamburger = ({ handleClick, isOpen, hamburgerRef }) => {
  return (
    <Wrapper onClick={handleClick} ref={hamburgerRef}>
      <Box isOpen={isOpen}>
        <span></span>
      </Box>
    </Wrapper>
  );
};

export default Hamburger;
