import styled from 'styled-components';
import { lightOutline } from 'assets/styles/outline';

export const Wrapper = styled.ul`
  margin: 0;
  padding: 0 10px;
`;

export const WorkoutListItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;

  padding: 0.3em;

  border-bottom: 1px solid ${({ theme }) => theme.color.darkGray};
  cursor: pointer;

  ${lightOutline}

  &:focus > :first-child,
  &:hover :first-child {
    color: ${({ theme }) => theme.color.lightRed};
  }
`;

export const WorkoutName = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const WorkoutDate = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;
