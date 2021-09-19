import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.lightGray};
`;
