import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 0;
`;
export const Wrapper = styled.div`
  margin: 0;
  height: calc(100vh - 64px);

  display: grid;
  place-items: center;
`;
export const Card = styled.div`
  width: clamp(240px, 90vw, 500px);
  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  background-color: #fff;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
`;
