import { useFirestore } from 'hooks/useFirestore';
import React from 'react';
import { StyledList, StyledLink } from './NavList.styles';

const NavList = ({ isOpen, closeNav }) => {
  const { auth } = useFirestore();
  const handleLogout = () => {
    auth.signOut();
    closeNav();
  };
  return (
    <StyledList isOpen={isOpen}>
      <li>
        <StyledLink to="/workouts">Workouts</StyledLink>
      </li>
      <li>
        <StyledLink to="/calc">Calculators</StyledLink>
      </li>
      <li>
        <StyledLink as="button" onClick={handleLogout}>
          Logout
        </StyledLink>
      </li>
    </StyledList>
  );
};

export default NavList;
