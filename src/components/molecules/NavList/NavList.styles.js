import styled from 'styled-components';
import Placeholder from 'assets/icons/arrow.svg';
import { NavLink } from 'react-router-dom';

export const StyledList = styled.ul`
  margin: 0;
  padding: 54px 0 24px;

  position: relative;
  z-index: 1;

  list-style: none;
  background-color: ${({ theme }) => theme.color.darkGray};

  transition: transform 0.3s ease-in-out,
    visibility 0s ${({ isOpen }) => (isOpen ? '0s' : '.3s')} linear;

  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: ${({ isOpen }) =>
    isOpen ? `translateY(-36px)` : 'translateY(-100%)'};

  border-bottom: 2px solid ${({ theme }) => theme.color.lightGray};
`;

export const StyledLink = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 24px;
  position: relative;
  z-index: 9;

  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  text-transform: lowercase;
  text-decoration: none;

  border: none;
  background: none;
  outline: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.red};
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

  &.active {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;
