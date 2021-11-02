import styled from 'styled-components';
import { lightOutline } from 'assets/styles/outline';

export const StyledLink = styled.a`
  padding: 0.4em;
  border: none;
  background: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.lightRed};
  }
  ${lightOutline}

  &.active {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    text-decoration: underline;
  }
`;
