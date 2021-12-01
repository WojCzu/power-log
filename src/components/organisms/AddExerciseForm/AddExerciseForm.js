import { Button } from 'components/atoms/Button/Button';
import Label from 'components/atoms/Label/Label';
import FormField from 'components/molecules/FormField/FormField';
import Modal from 'components/molecules/Modal/Modal';
import React, { useState } from 'react';
import { Wrapper, ButtonsWrapper } from './AddExerciseForm.styles';
import { addExercise } from 'redux/slices/workout';
import { useDispatch } from 'react-redux';

const AddExerciseForm = ({ closeModal, handleAddExercise, ...props }) => {
  const [exerciseName, setExerciseName] = useState('');
  const [volumeType, setVolumeType] = useState('reps');
  const dispatch = useDispatch();
  return (
    <Modal
      closeModal={closeModal}
      titleButtons={[{ icon: 'cross', text: 'close modal', fn: closeModal }]}
      {...props}
    >
      <Wrapper
        as="form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addExercise({ exerciseName, volumeType }));
          closeModal();
          e.stopPropagation();
        }}
      >
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
          <div onChange={(e) => setVolumeType(e.target.value)}>
            <Label as="p">repetitions:</Label>

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
      </Wrapper>
    </Modal>
  );
};

export default AddExerciseForm;
