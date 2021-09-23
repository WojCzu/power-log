import React from 'react';
import { historyWorkouts as data } from 'data/historyWorkouts';
import {
  Wrapper,
  WorkoutListItem,
  WorkoutInfo,
  WorkoutName,
  WorkoutDate,
  StyledButton,
} from './WorkoutList.styles';

const WorkoutList = () => {
  return (
    <Wrapper>
      {data.map((workout) => (
        <WorkoutListItem key={workout.id}>
          <WorkoutInfo>
            <WorkoutName>{workout.name}</WorkoutName>
            <WorkoutDate>{workout.date}</WorkoutDate>
          </WorkoutInfo>
          <StyledButton />
        </WorkoutListItem>
      ))}
    </Wrapper>
  );
};

export default WorkoutList;
