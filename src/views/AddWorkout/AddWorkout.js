import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import Accordion from 'components/organisms/Accordion/Accordion';
import Exercise from 'components/molecules/Exercise/Exercise';
import { useModal } from 'hooks/useModal';
import ModalConfirm from 'components/organisms/Modal/ModalConfirm';
import ModalAddExercise from 'components/organisms/Modal/ModalAddExercise';
import FormField from 'components/molecules/FormField/FormField';
import { Wrapper, ExercisesContainer } from './AddWorkout.styles';
import { useWorkout } from 'hooks/useWorkout';

const AddWorkout = () => {
  const { isModalOpen, toggleOpenModal } = useModal();
  const {
    isModalOpen: isEndWorkoutOpen,
    toggleOpenModal: toggleOpenEndWorkout,
  } = useModal();

  const {
    data: { date, name, exercises, notes },
    deleteExercise,
    handleInputChange,
  } = useWorkout();

  const today = new Date().toISOString().split('T')[0];

  return (
    <Wrapper>
      <FormField
        label="date:"
        type="date"
        id="starting-date"
        name="workout-start"
        value={date}
        max={today}
        onChange={(e) => handleInputChange('date', e.target.value)}
      />

      <FormField
        label="title:"
        type="text"
        id="workout-title"
        name="workout-title"
        value={name}
        onChange={(e) => handleInputChange('name', e.target.value)}
        placeholder="workout name"
        isBig
        isColumn
        customWidth="clamp(250px, 45vw, 700px)"
      />

      <ExercisesContainer>
        {exercises.map(({ id, name, volumeType, sets }) => (
          <Accordion
            key={id}
            title={name}
            handleDelete={() => deleteExercise(id)}
            hasDeleteButton
          >
            <Exercise volumeType={volumeType} sets={sets} id={id} />
          </Accordion>
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
