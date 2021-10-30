import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
export const Title = styled.h1`
  margin-bottom: 0;
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
