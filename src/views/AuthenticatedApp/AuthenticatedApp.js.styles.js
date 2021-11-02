import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
  height: 100vh;

  display: grid;
  grid-template-rows: 64px 1fr;
  background-color: ${({ theme }) => theme.color.darkGray};
`;

export const App = styled.div`
  overflow-y: auto;
`;
