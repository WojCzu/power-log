import React from 'react';
import ExerciseSet from 'components/molecules/ExerciseSet/ExerciseSet';
import { StyledButton } from './Exercise.styles';
import Accordion from 'components/organisms/Accordion/Accordion';
import { useDispatch } from 'react-redux';
import {
  deleteExercise,
  addSet,
  deleteSet,
  changeInput,
} from 'redux/slices/workout';

const Exercise = ({ volumeType, sets, id: exerciseId, title, isDisabled }) => {
  const dispatch = useDispatch();
  return (
    <Accordion
      title={title}
      hasDeleteButton={!isDisabled}
      handleDelete={() => dispatch(deleteExercise({ id: exerciseId }))}
      data-id={exerciseId}
    >
      {sets.map(({ id, weight, volume }, index) => {
        return (
          <ExerciseSet
            key={id}
            setNumber={index + 1}
            weight={weight}
            onWeightChange={(e) =>
              dispatch(
                changeInput({
                  field: 'weight',
                  value: e.target.value,
                  exerciseId,
                  id,
                })
              )
            }
            volume={volume}
            onVolumeChange={(e) =>
              dispatch(
                changeInput({
                  field: 'volume',
                  value: e.target.value,
                  exerciseId,
                  id,
                })
              )
            }
            volumeType={volumeType}
            isDisabled={isDisabled}
            handleDeleteSet={() => dispatch(deleteSet({ exerciseId, id }))}
          />
        );
      })}
      {!isDisabled && (
        <StyledButton
          $isFullWidth
          type="button"
          onClick={() => dispatch(addSet({ id: exerciseId }))}
        >
          add set
        </StyledButton>
      )}
    </Accordion>
  );
};

export default Exercise;
