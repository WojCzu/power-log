import { css } from 'styled-components';

export const lightOutline = css`
  &:focus-visible {
    outline: ${({ theme }) => theme.color.lightGray} dashed 2px;
    outline-offset: 2px;
  }
`;
export const darkOutline = css`
  &:focus-visible {
    outline: ${({ theme }) => theme.color.darkPurple} dashed 2px;
    outline-offset: 2px;
  }
`;
