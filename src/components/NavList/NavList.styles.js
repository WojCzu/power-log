import styled, { css } from 'styled-components';
import Placeholder from 'assets/icons/arrow.svg';

export const StyledList = styled.ul`
  margin: 0;
  padding: 54px 0;

  position: relative;

  list-style: none;
  border-bottom-left-radius: 36px;
  background-color: ${({ theme }) => theme.color.purple};

  transition: transform 0.3s ease-in-out,
    visibility 0s ${({ isOpen }) => (isOpen ? '0s' : '.3s')} linear;

  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: ${({ isOpen }) =>
    isOpen ? `translateY(-36px)` : 'translateY(-100%)'};

  &::after {
    content: '';
    display: block;
    width: 75px;
    height: 3px;

    position: absolute;
    bottom: 0;
    left: 50%;

    transform: translate(-50%, -10px);
    border-radius: 3px;
    background-color: ${({ theme }) => theme.color.lightGray};
  }
`;

export const StyledItem = styled.li`
  position: relative;

  ${({ isActive }) =>
    isActive &&
    css`
      &::before {
        content: '';
        display: block;
        width: 90vw;
        height: 40px;

        position: absolute;
        top: 0;
        left: 0;
        z-index: 8;

        background-color: #fff;
        border-top-right-radius: 44px;
        border-bottom-right-radius: 44px;
      }
    `}
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  padding: 10px 24px;
  position: relative;
  z-index: 9;

  color: ${({ isActive, theme }) =>
    isActive ? theme.color.darkPurple : theme.color.lightGray};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ isActive, theme }) =>
    isActive ? theme.fontWeight.bold : theme.fontWeight.light};
  text-transform: lowercase;
  text-decoration: none;

  outline: none;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.lightGray};
    background-color: ${({ theme }) => theme.color.darkPurple};
  }

  &::before {
    content: '';
    width: 24px;
    height: 24px;
    margin-right: 16px;
    display: block;

    background: url(${Placeholder}) no-repeat;
    background-size: contain;
    background-position: center;
  }
`;
