import React, { useState, useCallback } from 'react';
import Logo from 'components/Logo/Logo';
import Hamburger from 'components/Hamburger/Hamburger';
import {
  StyledHeader,
  StyledNav,
  Bar,
  StyledList,
  StyledItem,
} from './Navigation.styles';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = useCallback(
    () => setIsOpen((prevState) => !prevState),
    []
  );

  return (
    <StyledHeader>
      <StyledNav>
        <Bar>
          <Logo />
          <Hamburger handleClick={toggleIsOpen} isOpen={isOpen} />
        </Bar>
        <StyledList isOpen={isOpen}>
          <StyledItem>
            <a href="/">Home</a>
          </StyledItem>
          <StyledItem>
            <a href="/workouts">Workouts</a>
          </StyledItem>
          <StyledItem>
            <a href="/calc">Calculators</a>
          </StyledItem>
        </StyledList>
      </StyledNav>
    </StyledHeader>
  );
};

export default Navigation;
