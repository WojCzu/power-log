import styled from 'styled-components';
import { darkOutline } from 'assets/styles/outline';

export const StyledSetNumber = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.black};
`;

export const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.black};
`;

export const Wrapper = styled.div`
  margin: 10px 0;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 6fr 1fr;
`;

export const StyledButton = styled.button`
  padding: 0;

  text-align: right;
  background: none;
  border: none;

  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.black};
  cursor: pointer;
  ${darkOutline}
`;

export const StyledInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
