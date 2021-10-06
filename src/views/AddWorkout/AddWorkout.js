import React, { useState } from 'react';
import { Button } from 'components/atoms/Button/Button';
import Accordion from 'components/organisms/Accordion/Accordion';
import Exercise from 'components/molecules/Exercise/Exercise';
import { useModal } from 'hooks/useModal';
import ModalConfirm from 'components/organisms/Modal/ModalConfirm';
import ModalAddExercise from 'components/organisms/Modal/ModalAddExercise';
import FormField from 'components/molecules/FormField/FormField';
import { Wrapper, ExercisesContainer } from './AddWorkout.styles';

const AddWorkout = () => {
  const { isModalOpen, toggleOpenModal } = useModal();
  const {
    isModalOpen: isEndWorkoutOpen,
    toggleOpenModal: toggleOpenEndWorkout,
  } = useModal();

  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(today);
  const [workoutTitle, setWorkoutTitle] = useState('');

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleTitleChange = (e) => {
    setWorkoutTitle(e.target.value);
  };

  return (
    <Wrapper>
      <FormField
        label="date:"
        type="date"
        id="starting-date"
        name="workout-start"
        value={date}
        max={today}
        onChange={handleDateChange}
      />

      <FormField
        label="title:"
        type="text"
        id="workout-title"
        value={workoutTitle}
        onChange={handleTitleChange}
        placeholder="workout name"
        isBig
        isColumn
        customWidth="clamp(250px, 45vw, 700px)"
      />

      <ExercisesContainer>
        <Accordion title="Low bar squat">
          <Exercise />
        </Accordion>

        <Accordion title="Bulgarian split squat">
          <Exercise />
        </Accordion>

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
            placeholder="notes on training, technique, exercises etc..."
            isLabelHidden
          />
        </Accordion>
      </ExercisesContainer>

      <Button type="button" onClick={toggleOpenEndWorkout}>
        end workout
      </Button>
      {isEndWorkoutOpen && (
        <ModalConfirm
          isOpen={isEndWorkoutOpen}
          closeModal={toggleOpenEndWorkout}
          modalTitle="End workout?"
          handleConfirm={() => console.log(123)}
        >
          Are you sure, you want to end your workout?
        </ModalConfirm>
      )}
    </Wrapper>
  );
};

export default AddWorkout;
