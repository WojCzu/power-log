import React from 'react';
import ExerciseSet from 'components/molecules/ExerciseSet/ExerciseSet';
import { StyledButton } from './Exercise.styles';
import { useWorkout } from 'hooks/useWorkout';
import Accordion from 'components/organisms/Accordion/Accordion';

const Exercise = ({ volumeType, sets, id: exerciseId, title, isDisabled }) => {
  const { addSet, deleteSet, deleteExercise, handleInputChange } = useWorkout();

  return (
    <Accordion
      title={title}
      hasDeleteButton={!isDisabled}
      handleDelete={() => deleteExercise(exerciseId)}
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
            isDisabled={isDisabled}
            handleDeleteSet={() => deleteSet(exerciseId, id)}
          />
        );
      })}
      {!isDisabled && (
        <StyledButton
          isFullWidth
          type="button"
          onClick={() => addSet(exerciseId)}
        >
          add set
        </StyledButton>
      )}
    </Accordion>
  );
};

export default Exercise;
