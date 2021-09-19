import React from 'react';
import logo from 'assets/icons/logo.svg';
import { Wrapper, LogoImage, LogoText } from './Logo.styles';

const Logo = () => {
  return (
    <Wrapper href="/">
      <LogoImage src={logo} alt="logo" />
      <LogoText>
        <span>power</span>log
      </LogoText>
    </Wrapper>
  );
};

export default Logo;
