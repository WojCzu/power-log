import React from 'react';
import WorkoutList from 'components/organisms/WorkoutList/WorkoutList';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper, WorkoutHistory, Title } from './Workouts.styles';

const Workouts = () => {
  return (
    <Wrapper>
      <Button isPrimary>add new workout</Button>
      <WorkoutHistory>
        <Title>History</Title>
        <WorkoutList />
      </WorkoutHistory>
    </Wrapper>
  );
};

export default Workouts;
