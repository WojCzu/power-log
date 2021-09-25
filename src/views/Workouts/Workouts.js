import React from 'react';
import { StyledLink } from 'components/atoms/Button/Button';
import WorkoutList from 'components/organisms/WorkoutList/WorkoutList';
import { Wrapper, WorkoutHistory, Title } from './Workouts.styles';

const Workouts = () => {
  return (
    <Wrapper>
      <StyledLink to="/workouts/add" isPrimary>
        add new workout
      </StyledLink>
      <WorkoutHistory>
        <Title>History</Title>
        <WorkoutList />
      </WorkoutHistory>
    </Wrapper>
  );
};

export default Workouts;
