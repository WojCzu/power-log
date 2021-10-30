import { css } from 'styled-components';

export const lightOutline = css`
  &:focus-visible {
    outline: ${({ theme }) => theme.color.white} dashed 2px;
    outline-offset: 2px;
  }
`;
