import React from 'react';
import ExerciseSet from 'components/molecules/ExerciseSet/ExerciseSet';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper } from './Exercise.styles';

const Exercise = () => {
  return (
    <Wrapper>
      <ExerciseSet setNumber="1" weight="50" volume="12" volumeType="reps" />
      <ExerciseSet
        setNumber="2"
        weight="505.50"
        volume="12"
        volumeType="reps"
      />
      <ExerciseSet setNumber="3" weight="50" volume="12" volumeType="reps" />
      <Button isFullWidth type="button">
        add set
      </Button>
    </Wrapper>
  );
};

export default Exercise;
