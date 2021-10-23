import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import WorkoutList from 'components/organisms/WorkoutList/WorkoutList';
import { Wrapper, WorkoutHistory, Title } from './Workouts.styles';

const Workouts = () => {
  return (
    <Wrapper>
      <Button as={Link} to="/workouts/add" $isPrimary>
        add new workout
      </Button>
      <WorkoutHistory>
        <Title>History</Title>
        <WorkoutList />
      </WorkoutHistory>
    </Wrapper>
  );
};

export default Workouts;
