import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import Accordion from 'components/organisms/Accordion/Accordion';
import Exercise from 'components/organisms/Exercise/Exercise';
import { useModal } from 'hooks/useModal';
import FormField from 'components/molecules/FormField/FormField';
import { Wrapper, ExercisesContainer } from './AddWorkout.styles';
import { useFirestore } from 'hooks/useFirestore';
import dayjs from 'dayjs';
import AddExerciseForm from 'components/organisms/AddExerciseForm/AddExerciseForm';
import ConfirmAction from 'components/organisms/ConfirmAction/ConfirmAction';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput, resetState } from 'redux/slices/workout';
import { addWorkout } from 'redux/thunks/firebase';

const AddWorkout = () => {
  const { isModalOpen, toggleOpenModal } = useModal();
  const {
    isModalOpen: isEndWorkoutOpen,
    toggleOpenModal: toggleOpenEndWorkout,
  } = useModal();
  const { db, user } = useFirestore();

  const data = useSelector((state) => state.workout);
  const { loading } = useSelector((state) => state.firebase);
  const dispatch = useDispatch();

  //It may not be thee greatest but it works
  const checkRequiredInput = () => {
    exercises.forEach(({ id, sets }) => {
      for (const { weight, volume } of sets) {
        if ([weight, volume].includes('')) {
          const accordion = document.querySelector(`[data-id="${id}"]`);
          accordion.setAttribute('open', true);
          break;
        }
      }
    });
  };

  const handleEndWorkout = () => {
    try {
      dispatch(
        addWorkout({
          db,
          uid: user.uid,
          payload: {
            workout: {
              date,
              title: `${title || 'Unnamed'}`,
              exercises,
              notes,
            },
          },
        })
      );
      toggleOpenEndWorkout();
      dispatch(resetState());
    } catch (error) {
      console.error(error);
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }
  const { date, title, exercises, notes } = data;
  return (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault();
        toggleOpenEndWorkout();
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          checkRequiredInput();
        }
      }}
    >
      <FormField
        label="date:"
        type="date"
        id="starting-date"
        name="workout-start"
        value={date}
        max={dayjs().format('YYYY-MM-DD')}
        onChange={(e) =>
          dispatch(changeInput({ field: 'date', value: e.target.value }))
        }
        required
      />

      <FormField
        label="title:"
        type="text"
        id="workout-title"
        name="workout-title"
        value={title}
        onChange={(e) =>
          dispatch(changeInput({ field: 'title', value: e.target.value }))
        }
        placeholder="workout name"
        isBig
        isColumn
        customWidth="clamp(250px, 45vw, 700px)"
      />

      <ExercisesContainer>
        {exercises.map(({ id, name, volumeType, sets }) => (
          <Exercise
            volumeType={volumeType}
            sets={sets}
            id={id}
            key={id}
            title={name}
          />
        ))}
        <Button $isPrimary $isFullWidth type="button" onClick={toggleOpenModal}>
          add exercise
        </Button>
        {isModalOpen && (
          <AddExerciseForm
            isOpen={isModalOpen}
            closeModal={toggleOpenModal}
            modalTitle="Add new exercise"
          />
        )}
        <Accordion title="notes" isSmall>
          <FormField
            label="notes on training:"
            type="textarea"
            rows="4"
            id="notes"
            name="notes"
            placeholder="notes on training, technique, exercises etc..."
            value={notes}
            onChange={(e) =>
              dispatch(changeInput({ field: 'notes', value: e.target.value }))
            }
            isLabelHidden
          />
        </Accordion>
      </ExercisesContainer>

      <Button type="submit" onClick={checkRequiredInput} disabled={loading.add}>
        end workout
      </Button>
      {isEndWorkoutOpen && (
        <ConfirmAction
          isOpen={isEndWorkoutOpen}
          closeModal={toggleOpenEndWorkout}
          modalTitle="End workout?"
          handleConfirm={handleEndWorkout}
        >
          Are you sure, you want to end your workout?
        </ConfirmAction>
      )}
    </Wrapper>
  );
};

export default AddWorkout;
