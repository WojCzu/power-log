import Arrow from 'assets/icons/arrow.svg';
import styled from 'styled-components';
import { lightOutline } from 'assets/styles/outline';

export const StyledSummary = styled.summary`
  padding: 0.8em;

  position: relative;

  list-style: none;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme, isSmall }) =>
    isSmall ? theme.fontSize.m : theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
  cursor: pointer;
  ${lightOutline}

  border-bottom: 2px solid ${({ theme }) => theme.color.darkGray};

  &::before {
    content: '';
    left: 0.8em;
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

  button {
    right: 0.8em;
    top: 50%;
    transform: translateY(-50%);

    position: absolute;
  }
`;

export const Wrapper = styled.details`
  background-color: ${({ theme }) => theme.color.black};
  border-radius: 8px;

  &[open] ${StyledSummary}::before {
    transform: translateY(-50%) rotate(-90deg);
  }
`;

export const Content = styled.div`
  padding: 1.2em;
`;
