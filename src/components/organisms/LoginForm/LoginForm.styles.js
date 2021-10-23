import { darkOutline } from 'assets/styles/outline';
import styled from 'styled-components';

export const StyledP = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.black};
`;
export const StyledButton = styled.button`
  padding: 0.4em;
  border: none;
  background: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.purple};
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.darkPurple};
  }
  ${darkOutline}
`;

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
