import React from 'react';
import {
  Wrapper,
  WorkoutListItem,
  WorkoutInfo,
  WorkoutName,
  WorkoutDate,
  StyledButton,
} from './WorkoutList.styles';
import { useFirestore } from 'hooks/useFirestore';

const WorkoutList = () => {
  const { data } = useFirestore();
  return (
    <Wrapper>
      {data.map((workout) => (
        <WorkoutListItem key={workout.id}>
          <WorkoutInfo>
            <WorkoutName>{workout.title}</WorkoutName>
            <WorkoutDate>{workout.date}</WorkoutDate>
          </WorkoutInfo>
          <StyledButton />
        </WorkoutListItem>
      ))}
    </Wrapper>
  );
};

export default WorkoutList;
