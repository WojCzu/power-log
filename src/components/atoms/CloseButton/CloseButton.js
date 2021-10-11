import styled from 'styled-components';
import { darkOutline } from 'assets/styles/outline';

export const CloseButton = styled.button`
  padding: 0;

  text-align: right;
  background: none;
  border: none;

  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ isWhite, theme }) =>
    isWhite ? theme.color.white : theme.color.black};
  cursor: pointer;
  ${darkOutline}
`;
