import React from 'react';
import Logo from 'components/Logo/Logo';
import Hamburger from 'components/Hamburger/Hamburger';
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
