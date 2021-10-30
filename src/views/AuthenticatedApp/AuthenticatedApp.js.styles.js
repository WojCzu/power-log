import styled from 'styled-components';
import { scrollbar } from 'assets/styles/scrollbar';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding-top: 64px;
  height: 100vh;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.color.darkGray};

  ${scrollbar} {
    ::-webkit-scrollbar-track {
      margin-top: calc(64px + 0.5em);
    }
  }
`;
