import styled from 'styled-components';

export const Wrapper = styled.form`
  margin: 0 auto;
  padding: 1px 20px 20px;
  width: clamp(280px, 100%, 860px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormField = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: ${({ isColumn }) => isColumn && 'column'};
  align-items: flex-start;

  align-self: flex-start;
`;
export const ExercisesContainer = styled.div`
  width: clamp(250px, 100%, 450px);
`;
