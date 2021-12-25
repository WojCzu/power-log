import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 24px 20px;
  min-height: 100%;
  width: 100%;
  max-width: 550px;
  overflow-y: hidden;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: center;
  justify-items: start;

  & > *:nth-child(2n) {
    justify-self: center;
  }

  ${Button} {
    grid-column: 1 / -1;
    justify-self: stretch;
  }
`;

export const ResultMessage = styled.p`
  margin-block: 20px 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.color.white};
`;

export const Result = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const StyledP = styled.p`
  margin-block: 0 12px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.color.white};
`;
