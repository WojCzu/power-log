import { StyledLink } from 'components/atoms/StyledLink/StyledLink';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper } from './LoginNav.styles';
import routes from 'utils/routes';

const LoginNav = () => {
  return (
    <Wrapper>
      <StyledLink as={NavLink} to={routes.login}>
        Login
      </StyledLink>
      <StyledLink as={NavLink} to={routes.signup}>
        Signup
      </StyledLink>
    </Wrapper>
  );
};

export default LoginNav;
