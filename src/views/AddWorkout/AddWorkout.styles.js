import { darkOutline } from 'assets/styles/outline';
import styled from 'styled-components';

export const Wrapper = styled.form`
  margin: 0 auto;
  padding: 1px 20px 20px;
  width: clamp(280px, 100%, 860px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DateInput = styled.input`
  margin-left: 10px;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.color.black};

  &::-webkit-calendar-picker-indicator {
    margin: 0;
  }
  ${darkOutline}
`;

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.black};
`;

export const FormField = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: ${({ isColumn }) => isColumn && 'column'};
  align-items: flex-start;

  align-self: flex-start;
`;
export const ExercisesContainer = styled.div`
  width: clamp(250px, 100%, 450px);
`;
