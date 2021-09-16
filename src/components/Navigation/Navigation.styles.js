import styled from 'styled-components';
import Placeholder from 'assets/icons/arrow.svg';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  & + * {
    margin-top: 64px;
  }
`;
export const StyledNav = styled.nav`
  height: 64px;
`;

export const Bar = styled.div`
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  border-bottom-left-radius: 36px;
  background-color: ${({ theme }) => theme.color.purple};
  position: relative;
  height: 64px;
  z-index: 10;
`;

export const StyledList = styled.ul`
  margin: 0;
  padding: 54px 0;
  list-style: none;
  position: relative;
  z-index: 9;

  border-bottom-left-radius: 36px;
  background-color: ${({ theme }) => theme.color.purple};

  transition: transform 0.3s ease-in-out,
    visibility 0s ${({ isOpen }) => (isOpen ? '0s' : '.3s')} linear;

  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(-36px)' : 'translateY(-100%)'};

  &::after {
    content: '';
    display: block;
    width: 75px;
    height: 3px;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.color.lightGray};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -10px);
  }
`;

export const StyledItem = styled.li`
  a {
    display: flex;
    align-items: center;
    padding: 10px 24px;

    color: ${({ theme }) => theme.color.lightGray};
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    text-transform: lowercase;
    text-decoration: none;

    outline: none;
    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.color.darkPurple};
    }

    &::before {
      content: '';
      width: 24px;
      height: 24px;
      display: block;
      background: url(${Placeholder}) no-repeat;
      background-size: contain;
      background-position: center;
      margin-right: 16px;
    }
  }
`;
