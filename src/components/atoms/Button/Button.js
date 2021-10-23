import styled from 'styled-components';
import { darkOutline } from 'assets/styles/outline';

export const Button = styled.button`
  padding: 0.5em 1.5em;
  width: ${({ $isFullWidth }) => ($isFullWidth ? '100%' : 'auto')};
  font-size: ${({ theme }) => theme.fontSize.m};

  background-color: ${({ $isPrimary, theme }) =>
    $isPrimary ? theme.color.purple : 'transparent'};
  color: ${({ $isPrimary, theme }) =>
    $isPrimary ? theme.color.lightGray : theme.color.purple};
  border: 1px solid;
  border-color: ${({ $isPrimary, theme }) =>
    $isPrimary ? 'transparent' : theme.color.purple};
  border-radius: 8px;

  text-decoration: none;
  text-align: center;
  cursor: pointer;

  transition: background-color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.darkPurple};
    border-color: ${({ theme }) => theme.color.darkPurple};
    color: ${({ theme }) => theme.color.lightGray};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.gray};
    border-color: ${({ theme }) => theme.color.gray};
  }

  ${darkOutline}
`;
