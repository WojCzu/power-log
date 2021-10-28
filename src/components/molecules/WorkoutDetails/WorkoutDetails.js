import Accordion from 'components/organisms/Accordion/Accordion';
import Exercise from 'components/organisms/Exercise/Exercise';
import React from 'react';
import FormField from '../FormField/FormField';
import dayjs from 'dayjs';
import { Wrapper, ButtonsWrapper } from './WorkoutDetails.styles';
import { Button } from 'components/atoms/Button/Button';
import { SrOnly } from 'components/atoms/SrOnly/SrOnly';

const WorkoutDetails = ({
  currentWorkout: { id, date, exercises, notes },
  handleDelete,
}) => {
  return (
    <Wrapper>
      <SrOnly id="modal__description">
        Workout overview, you can edit or delete it
      </SrOnly>

      <FormField
        label="date:"
        type="date"
        id="starting-date"
        name="workout-start"
        value={dayjs(date).format('YYYY-MM-DD')}
        max={dayjs().format('YYYY-MM-DD')}
        disabled
        required
      />
      {exercises.map(({ id, name, volumeType, sets }) => (
        <Exercise
          volumeType={volumeType}
          sets={sets}
          id={id}
          key={id}
          title={name}
          isDisabled
        />
      ))}

      <Accordion title="notes" isSmall>
        <FormField
          label="notes on training:"
          type="textarea"
          rows="4"
          id="notes"
          name="notes"
          value={notes || 'no notes'}
          disabled
          isLabelHidden
        />
      </Accordion>

      <ButtonsWrapper>
        <Button>Edit</Button>
        <Button $isPrimary onClick={() => handleDelete(id)}>
          Delete
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default WorkoutDetails;
