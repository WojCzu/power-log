import Arrow from 'assets/icons/arrow.svg';
import styled from 'styled-components';
import { darkOutline } from 'assets/styles/outline';

export const StyledSummary = styled.summary`
  padding: 0.4em;

  position: relative;

  list-style: none;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.purple};
  font-size: ${({ theme, isSmall }) =>
    isSmall ? theme.fontSize.m : theme.fontSize.l};
  text-align: center;
  border-bottom-right-radius: 0.8em;
  cursor: pointer;
  ${darkOutline}

  &::before {
    content: '';
    left: 0.5em;
    top: 50%;
    height: 1em;
    width: 1em;

    position: absolute;
    transform: translateY(-50%) rotate(90deg);
    transform-origin: center;
    background: transparent url(${Arrow}) no-repeat center;
    background-size: contain;
    transition: transform 0.2s;
  }
`;

export const Wrapper = styled.details`
  margin: 24px 0;

  background-color: ${({ theme }) => theme.color.white};
  border-radius: 0 0 16px 16px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);

  &[open] ${StyledSummary}::before {
    transform: translateY(-50%) rotate(-90deg);
  }
`;

export const Content = styled.div`
  padding: 10px;
`;
