import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding-top: 64px;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.lightGray};
`;
