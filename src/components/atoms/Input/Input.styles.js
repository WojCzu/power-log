import { lightOutline } from 'assets/styles/outline';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    border-radius: 4px;
  }

  &::before {
    background-color: ${({ isDisabled, theme }) =>
      isDisabled ? 'transparent' : theme.color.gray};
  }
  &::after {
    background-color: ${({ theme }) => theme.color.lightGray};
    transform-origin: center;
    transform: scaleX(0);
    transition: transform ease-in-out 0.1s;
  }

  &:focus-within::after {
    transform: scaleX(1);
  }
`;

export const TextInput = styled.input`
  background: none;
  padding: 0.3em;
  margin: 0;
  border: none;
  outline: none;
  width: ${({ customWidth }) => customWidth || 'auto'};

  text-align: ${({ isTextCenter }) => isTextCenter && 'center'};

  font-size: ${({ isBig, theme }) =>
    isBig ? theme.fontSize.xl : theme.fontSize.m};

  font-weight: ${({ theme }) => theme.fontWeight.normal};

  color: ${({ theme }) => theme.color.white};

  &::placeholder {
    color: ${({ theme }) => theme.color.lightGray};
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const DateInput = styled.input`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.white};

  &::-webkit-calendar-picker-indicator {
    margin: 0;
    filter: invert(1);
  }
  ${lightOutline}
`;

export const RadioInput = styled.input`
  accent-color: ${({ theme }) => theme.color.red};
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  resize: vertical;

  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: transparent;
  border: none;
  &::placeholder {
    color: ${({ theme }) => theme.color.lightGray};
  }
  ${lightOutline}
`;
