import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 24px 48px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  max-height: 80vh;
  overflow-y: auto;
`;
export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 36px;
`;
