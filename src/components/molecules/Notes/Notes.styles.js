import styled from 'styled-components';
import { darkOutline } from 'assets/styles/outline';

export const Wrapper = styled.div`
  padding: 10px;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 0;

  resize: vertical;

  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.color.white};
  border: none;
  ${darkOutline}
`;
