import { useFirestore } from 'hooks/useFirestore';
import React from 'react';
import routes from 'utils/routes';
import { StyledList, StyledLink } from './NavList.styles';

const NavList = ({ isOpen, closeNav }) => {
  const { auth } = useFirestore();
  const handleLogout = () => {
    auth.signOut();
  };
  return (
    <StyledList isOpen={isOpen}>
      <li onClick={() => closeNav()}>
        <StyledLink to={routes.workoutList}>Workouts</StyledLink>
      </li>
      <li onClick={() => closeNav()}>
        <StyledLink to={routes.calculators}>Calculators</StyledLink>
      </li>
      <li onClick={() => closeNav()}>
        <StyledLink as="button" onClick={handleLogout}>
          Logout
        </StyledLink>
      </li>
    </StyledList>
  );
};

export default NavList;
