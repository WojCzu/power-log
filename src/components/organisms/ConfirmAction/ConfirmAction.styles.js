import styled from 'styled-components';

export const StyledDescription = styled.p`
  color: ${({ theme }) => theme.color.white};
  margin: 0;
`;

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 36px;
`;
