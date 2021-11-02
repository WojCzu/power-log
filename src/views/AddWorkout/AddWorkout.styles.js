import styled from 'styled-components';

export const Wrapper = styled.form`
  margin: 0 auto;
  padding: 24px;
  gap: 24px;
  width: clamp(280px, 100%, 740px);
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div:nth-child(1),
  & > div:nth-child(2) {
    align-self: flex-start;
  }
`;
export const ExercisesContainer = styled.div`
  width: clamp(250px, 100%, 450px);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
