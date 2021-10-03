import React, { useState } from 'react';
import { Button } from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import Accordion from 'components/organisms/Accordion/Accordion';
import Exercise from 'components/molecules/Exercise/Exercise';
import Notes from 'components/molecules/Notes/Notes';
import { useModal } from 'hooks/useModal';
import Modal from 'components/organisms/Modal/Modal';
import {
  Wrapper,
  DateInput,
  StyledLabel,
  FormField,
  ExercisesContainer,
} from './AddWorkout.styles';

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
      <FormField>
        <StyledLabel htmlFor="starting-date">date: </StyledLabel>
        <DateInput
          type="date"
          id="starting-date"
          name="workout-start"
          value={date}
          max={today}
          onChange={handleDateChange}
        />
      </FormField>
      <FormField isColumn>
        <StyledLabel htmlFor="workout-title">title: </StyledLabel>
        <Input
          type="text"
          id="workout-title"
          value={workoutTitle}
          onChange={handleTitleChange}
          placeholder="workout name"
          isBig
          customWidth="clamp(250px, 45vw, 700px)"
        />
      </FormField>

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
          <Modal isOpen={isModalOpen} onRequestClose={toggleOpenModal}>
            <button
              onClick={() => {
                console.log('add new exercise');
              }}
            >
              add new exercise
            </button>
          </Modal>
        )}

        <Accordion title="notes" isSmall>
          <Notes />
        </Accordion>
      </ExercisesContainer>

      <Button type="button" onClick={toggleOpenEndWorkout}>
        end workout
      </Button>
      {isEndWorkoutOpen && (
        <Modal isOpen={isEndWorkoutOpen} onRequestClose={toggleOpenEndWorkout}>
          <button
            onClick={() => {
              console.log('end workout');
            }}
          >
            end workout?
          </button>
        </Modal>
      )}
    </Wrapper>
  );
};

export default AddWorkout;
