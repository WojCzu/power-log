import React from 'react';
import ExerciseSet from 'components/molecules/ExerciseSet/ExerciseSet';
import { StyledButton } from './Exercise.styles';

const Exercise = () => {
  return (
    <>
      <ExerciseSet setNumber="1" weight="50" volume="12" volumeType="reps" />
      <ExerciseSet
        setNumber="2"
        weight="505.50"
        volume="12"
        volumeType="reps"
      />
      <ExerciseSet setNumber="3" weight="50" volume="12" volumeType="reps" />
      <StyledButton isFullWidth type="button">
        add set
      </StyledButton>
    </>
  );
};

export default Exercise;
