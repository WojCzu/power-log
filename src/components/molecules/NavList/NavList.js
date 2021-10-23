import { useFirestore } from 'hooks/useFirestore';
import React from 'react';
import { StyledItem, StyledList, StyledLink } from './NavList.styles';

const NavList = ({ isOpen, closeNav }) => {
  const { auth } = useFirestore();
  const handleLogout = () => {
    auth.signOut();
    closeNav();
  };
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
      <StyledItem>
        <StyledLink as="button" onClick={handleLogout}>
          Logout
        </StyledLink>
      </StyledItem>
    </StyledList>
  );
};

export default NavList;
