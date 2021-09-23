import React from 'react';
import Logo from 'components/atoms/Logo/Logo';
import Hamburger from 'components/atoms/Hamburger/Hamburger';
import { Wrapper } from './NavBar.styles';

const NavBar = ({ ...props }) => {
  return (
    <Wrapper>
      <Logo />
      <Hamburger {...props} />
    </Wrapper>
  );
};

export default NavBar;
