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
import styled from 'styled-components';
import { SrOnly } from 'components/atoms/SrOnly/SrOnly';

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
          <Modal
            isOpen={isModalOpen}
            closeModal={toggleOpenModal}
            modalTitle="Add new exercise"
          >
            <SrOnly id="modal__description">
              Fill form to add new exercise to workout
            </SrOnly>
            <FormField isColumn>
              <StyledLabel htmlFor="exercise-name">name: </StyledLabel>
              <Input
                type="text"
                id="exercise-name"
                placeholder="exercise name"
              />
            </FormField>
            <FormField isColumn>
              <p>repetitions:</p>
              <div>
                <StyledRadio
                  type="radio"
                  id="reps"
                  value="reps"
                  name="repetitions-type"
                />
                <label htmlFor="reps">reps</label>
              </div>
              <div>
                <StyledRadio
                  type="radio"
                  id="seconds"
                  value="seconds"
                  name="repetitions-type"
                />
                <label htmlFor="seconds">seconds</label>
              </div>
            </FormField>
            <Button onClick={toggleOpenModal}>cancel</Button>
            <Button isPrimary>add</Button>
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
        <Modal
          isOpen={isEndWorkoutOpen}
          closeModal={toggleOpenEndWorkout}
          modalTitle="End workout?"
        >
          <p id="modal__description">
            Are you sure, you want to end your workout?
          </p>
          <Button onClick={toggleOpenEndWorkout}>cancel</Button>
          <Button isPrimary>confirm</Button>
        </Modal>
      )}
    </Wrapper>
  );
};

export default AddWorkout;

const StyledRadio = styled.input`
  accent-color: ${({ theme }) => theme.color.purple};
  margin-right: 10px;
`;
