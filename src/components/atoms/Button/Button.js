import styled from 'styled-components';
import { lightOutline } from 'assets/styles/outline';

export const Button = styled.button`
  padding: 0.8em 3em;
  width: ${({ $isFullWidth }) => ($isFullWidth ? '100%' : 'auto')};

  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  background-color: ${({ $isPrimary, theme }) =>
    $isPrimary ? theme.color.red : theme.color.black};
  color: ${({ theme }) => theme.color.white};
  border: 1px solid;
  border-color: ${({ $isPrimary, theme }) =>
    $isPrimary ? theme.color.red : theme.color.gray};
  border-radius: 8px;

  text-decoration: none;
  text-align: center;
  cursor: pointer;

  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.lightRed};
    border-color: ${({ theme }) => theme.color.lightRed};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.gray};
    border-color: ${({ theme }) => theme.color.gray};
  }

  ${lightOutline}
`;
