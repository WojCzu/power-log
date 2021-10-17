import styled from 'styled-components';
import { lightOutline } from 'assets/styles/outline';

export const Wrapper = styled.button`
  height: 36px;
  width: 46px;
  padding: 6px;

  border: none;
  background-color: transparent;
  cursor: pointer;

  transform: translateX(6px);

  ${lightOutline}
`;

export const Box = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;

  span,
  &::after,
  &::before {
    display: block;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.color.white};
    position: absolute;
  }

  &::after,
  &::before {
    content: '';
    transition: transform 0.2s ease-in-out;
  }

  &::before {
    top: 0;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(calc(9px + 50%)) rotate(45deg)' : ''};
  }
  &::after {
    bottom: 0;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(calc(-9px - 50%)) rotate(-45deg)' : ''};
  }

  span {
    top: 50%;
    transform: translateY(-50%);
    transition: opacity 0.2s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  }
`;
