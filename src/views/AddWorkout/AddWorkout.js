import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import Accordion from 'components/organisms/Accordion/Accordion';
import Exercise from 'components/organisms/Exercise/Exercise';
import { useModal } from 'hooks/useModal';
import ModalConfirm from 'components/organisms/Modal/ModalConfirm';
import ModalAddExercise from 'components/organisms/Modal/ModalAddExercise';
import FormField from 'components/molecules/FormField/FormField';
import { Wrapper, ExercisesContainer } from './AddWorkout.styles';
import { useWorkout } from 'hooks/useWorkout';
import { useFirestore } from 'hooks/useFirestore';
import dayjs from 'dayjs';

const AddWorkout = () => {
  const { isModalOpen, toggleOpenModal } = useModal();
  const {
    isModalOpen: isEndWorkoutOpen,
    toggleOpenModal: toggleOpenEndWorkout,
  } = useModal();
  const {
    data: { date, title, exercises, notes },
    handleInputChange,
    resetState,
  } = useWorkout();

  const { addWorkout } = useFirestore();

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

  const handleEndWorkout = async () => {
    try {
      await addWorkout({
        date: new Date(date),
        title: `${title || 'Unnamed'}`,
        exercises,
        notes,
      });
      toggleOpenEndWorkout();
      resetState();
    } catch (error) {
      console.error(error);
    }
  };

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
        onChange={(e) => handleInputChange('date', e.target.value)}
        required
      />

      <FormField
        label="title:"
        type="text"
        id="workout-title"
        name="workout-title"
        value={title}
        onChange={(e) => handleInputChange('title', e.target.value)}
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
        <Button isPrimary isFullWidth type="button" onClick={toggleOpenModal}>
          add exercise
        </Button>
        {isModalOpen && (
          <ModalAddExercise
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
            onChange={(e) => handleInputChange('notes', e.target.value)}
            isLabelHidden
          />
        </Accordion>
      </ExercisesContainer>

      <Button type="submit" onClick={checkRequiredInput}>
        end workout
      </Button>
      {isEndWorkoutOpen && (
        <ModalConfirm
          isOpen={isEndWorkoutOpen}
          closeModal={toggleOpenEndWorkout}
          modalTitle="End workout?"
          handleConfirm={handleEndWorkout}
        >
          Are you sure, you want to end your workout?
        </ModalConfirm>
      )}
    </Wrapper>
  );
};

export default AddWorkout;
