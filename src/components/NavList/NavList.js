import React from 'react';
import { StyledItem, StyledList, StyledLink } from './NavList.styles';

const NavList = ({ isOpen }) => {
  return (
    <StyledList isOpen={isOpen}>
      <StyledItem isActive={true}>
        <StyledLink href="/" isActive={true}>
          Home
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink href="/workouts">Workouts</StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink href="/calc">Calculators</StyledLink>
      </StyledItem>
    </StyledList>
  );
};

export default NavList;
