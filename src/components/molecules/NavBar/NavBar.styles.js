import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 12px 20px;
  height: 100%;

  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  background-color: ${({ theme }) => theme.color.purple};
  border-bottom-left-radius: 36px;
`;
