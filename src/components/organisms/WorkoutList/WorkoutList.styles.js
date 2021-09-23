import styled from 'styled-components';
import Arrow from 'assets/icons/arrow.svg';

export const Wrapper = styled.ul`
  margin: 0;
  padding: 0 10px;
`;

export const WorkoutListItem = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 45px;
  grid-gap: 8px;

  padding: 8px 0;

  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
`;

export const WorkoutName = styled.span`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

export const WorkoutDate = styled.span`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

export const WorkoutInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  place-self: center end;
  border: none;
  background: transparent url(${Arrow}) no-repeat;
  background-size: contain;
  cursor: pointer;

  &:focus-visible {
    outline: ${({ theme }) => theme.color.purple} dashed 2px;
    outline-offset: 2px;
  }
`;
