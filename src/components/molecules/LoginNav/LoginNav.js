import { StyledLink } from 'components/atoms/StyledLink/StyledLink';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper } from './LoginNav.styles';

const LoginNav = () => {
  return (
    <Wrapper>
      <StyledLink as={NavLink} to="/login">
        Login
      </StyledLink>
      <StyledLink as={NavLink} to="/signup">
        Signup
      </StyledLink>
    </Wrapper>
  );
};

export default LoginNav;
