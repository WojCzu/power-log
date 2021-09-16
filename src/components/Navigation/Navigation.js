import React, { useState, useCallback } from 'react';
import Logo from 'components/Logo/Logo';
import Hamburger from 'components/Hamburger/Hamburger';
import { StyledHeader } from './Navigation.styles';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = useCallback(
    () => setIsOpen((prevState) => !prevState),
    []
  );

  return (
    <StyledHeader>
      <Logo />
      <nav>
        <Hamburger handleClick={toggleIsOpen} isOpen={isOpen} />
      </nav>
    </StyledHeader>
  );
};

export default Navigation;
