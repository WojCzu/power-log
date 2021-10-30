import { css } from 'styled-components';

export const scrollbar = css`
  ::-webkit-scrollbar {
    width: 0.8em;
    height: 0.8em;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color.lightGray};
    border-radius: 100vw;
    margin-block: 0.5em;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.red};
    border: 0.25em blue;
    border-radius: 100vw;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.color.lightRed};
  }

  @supports (scrollbar-color: red gray) {
    * {
      scrollbar-color: ${({ theme }) =>
        `${theme.color.red} ${theme.color.lightGray}`};
    }
  }
`;
