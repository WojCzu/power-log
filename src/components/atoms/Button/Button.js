import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.5em 1.5em;

  font-size: ${({ theme }) => theme.fontSize.m};

  background-color: ${({ isPrimary, theme }) =>
    isPrimary ? theme.color.purple : 'transparent'};
  color: ${({ isPrimary, theme }) =>
    isPrimary ? theme.color.lightGray : theme.color.purple};
  border: 1px solid;
  border-color: ${({ isPrimary, theme }) =>
    isPrimary ? 'transparent' : theme.color.purple};
  border-radius: 8px;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.darkPurple};
    color: ${({ theme }) => theme.color.lightGray};
  }

  &:focus-visible {
    outline: ${({ theme }) => theme.color.purple} dashed 2px;
    outline-offset: 2px;
  }
`;
