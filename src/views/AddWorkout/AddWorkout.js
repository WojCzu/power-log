import React, { useState } from 'react';
import { Button } from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import Accordion from 'components/organisms/Accordion/Accordion';
import Exercise from 'components/molecules/Exercise/Exercise';
import Notes from 'components/molecules/Notes/Notes';
import {
  Wrapper,
  DateInput,
  StyledLabel,
  FormField,
  ExercisesContainer,
} from './AddWorkout.styles';

const AddWorkout = () => {
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

        <Button isPrimary isFullWidth>
          add exercise
        </Button>

        <Accordion title="notes" isSmall>
          <Notes />
        </Accordion>
      </ExercisesContainer>
      <Button type="submit">end workout</Button>
    </Wrapper>
  );
};

export default AddWorkout;
