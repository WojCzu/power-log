import React from 'react';
import { Wrapper, Box } from './Hamburger.styles';

const Hamburger = ({ handleClick, isOpen }) => {
  return (
    <Wrapper onClick={handleClick}>
      <Box isOpen={isOpen}>
        <span></span>
      </Box>
    </Wrapper>
  );
};

export default Hamburger;
