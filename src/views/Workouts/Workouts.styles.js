import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px 20px;
  height: 100%;
  width: 100%;
  max-width: 800px;

  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: 1fr;
  ${Button} {
    align-self: center;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.color.white};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const WorkoutHistory = styled.div`
  padding: 0 15px;
  overflow: auto;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.black};
`;
