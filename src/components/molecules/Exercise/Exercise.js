import React from 'react';
import ExerciseSet from 'components/molecules/ExerciseSet/ExerciseSet';
import { StyledButton } from './Exercise.styles';
import { useWorkout } from 'hooks/useWorkout';

const Exercise = ({ volumeType, sets, id: exerciseId }) => {
  const { addSet, deleteSet } = useWorkout();
  return (
    <>
      {sets.map(({ id, weight, volume }, index) => {
        return (
          <ExerciseSet
            key={id}
            setNumber={index + 1}
            weight={weight}
            onWeightChange={() => console.log(123)}
            volume={volume}
            onVolumeChange={() => console.log(123)}
            volumeType={volumeType}
            handleDeleteSet={() => deleteSet(exerciseId, id)}
          />
        );
      })}
      <StyledButton
        isFullWidth
        type="button"
        onClick={() => addSet(exerciseId)}
      >
        add set
      </StyledButton>
    </>
  );
};

export default Exercise;
