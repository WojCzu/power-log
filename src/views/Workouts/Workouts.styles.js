import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 24px 20px;
  height: 100%;
  width: 100%;
  max-width: 800px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.color.white};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const WorkoutHistory = styled.div`
  padding: 0 15px;
  overflow: auto;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.black};
`;
