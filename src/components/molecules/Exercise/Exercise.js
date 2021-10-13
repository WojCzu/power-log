import React from 'react';
import ExerciseSet from 'components/molecules/ExerciseSet/ExerciseSet';
import { StyledButton } from './Exercise.styles';
import { useWorkout } from 'hooks/useWorkout';

const Exercise = ({ volumeType, sets, id: exerciseId }) => {
  const { addSet, deleteSet, handleInputChange } = useWorkout();
  return (
    <>
      {sets.map(({ id, weight, volume }, index) => {
        return (
          <ExerciseSet
            key={id}
            setNumber={index + 1}
            weight={weight}
            onWeightChange={(e) =>
              handleInputChange('weight', e.target.value, exerciseId, id)
            }
            volume={volume}
            onVolumeChange={(e) =>
              handleInputChange('volume', e.target.value, exerciseId, id)
            }
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
