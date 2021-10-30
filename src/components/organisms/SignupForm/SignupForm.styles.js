import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 0;
`;

export const Card = styled.div`
  width: clamp(240px, 90vw, 500px);
  padding: 24px;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  background-color: ${({ theme }) => theme.color.black};
`;
