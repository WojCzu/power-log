import { Button } from 'components/atoms/Button/Button';
import { SrOnly } from 'components/atoms/SrOnly/SrOnly';
import FormField from 'components/molecules/FormField/FormField';
import { useWorkout } from 'hooks/useWorkout';
import React, { useState } from 'react';
import Modal from './Modal';
import { ButtonsWrapper, Content } from './Modal.styles';

const ModalAddExercise = ({ closeModal, handleAddExercise, ...props }) => {
  const [exerciseName, setExerciseName] = useState('');
  const [repetitionsType, setRepetitionsType] = useState('reps');
  const { addExercise } = useWorkout();

  return (
    <Modal closeModal={closeModal} {...props}>
      <Content
        as="form"
        onSubmit={(e) => {
          e.preventDefault();
          addExercise(exerciseName, repetitionsType);
          closeModal();
          e.stopPropagation();
        }}
      >
        <SrOnly id="modal__description">
          Fill form to add new exercise to workout
        </SrOnly>
        <div>
          <FormField
            label="name:"
            type="text"
            id="exercise-name"
            name="exercise-name"
            placeholder="exercise name"
            isColumn
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
            required
          />
          <div onChange={(e) => setRepetitionsType(e.target.value)}>
            <p>repetitions:</p>

            <FormField
              label="reps"
              type="radio"
              id="reps"
              value="reps"
              name="repetitions-type"
              defaultChecked
            />

            <FormField
              label="seconds"
              type="radio"
              id="secs"
              value="secs"
              name="repetitions-type"
            />
          </div>
        </div>
        <ButtonsWrapper>
          <Button type="button" onClick={closeModal}>
            cancel
          </Button>
          <Button type="submit" $isPrimary>
            add
          </Button>
        </ButtonsWrapper>
      </Content>
    </Modal>
  );
};

export default ModalAddExercise;
