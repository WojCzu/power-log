import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0;
  min-height: 100vh;

  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme.color.darkGray};
`;
