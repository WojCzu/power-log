import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding: 12px 18px;

  position: fixed;
  top: 0;
  width: 100%;

  border-bottom-left-radius: 36px;
  background-color: ${({ theme }) => theme.color.purple};

  & + * {
    margin-top: 57px;
  }
`;
