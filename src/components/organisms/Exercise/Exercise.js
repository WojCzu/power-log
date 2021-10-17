import React, { useCallback } from 'react';
import ExerciseSet from 'components/molecules/ExerciseSet/ExerciseSet';
import { StyledButton } from './Exercise.styles';
import { useWorkout } from 'hooks/useWorkout';
import Accordion from 'components/organisms/Accordion/Accordion';

const Exercise = ({ volumeType, sets, id: exerciseId, title }) => {
  const { addSet, deleteSet, deleteExercise, handleInputChange } = useWorkout();

  const handleDelete = useCallback(
    () => deleteExercise(exerciseId),
    [deleteExercise, exerciseId]
  );

  return (
    <Accordion
      title={title}
      hasDeleteButton
      handleDelete={handleDelete}
      data-id={exerciseId}
    >
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
    </Accordion>
  );
};

export default Exercise;
