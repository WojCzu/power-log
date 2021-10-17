import styled from 'styled-components';

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  z-index: 999;

  & + * {
    margin-top: 64px;
  }
`;
