import { Button } from 'components/atoms/Button/Button';
import { SrOnly } from 'components/atoms/SrOnly/SrOnly';
import FormField from 'components/molecules/FormField/FormField';
import React from 'react';
import Modal from './Modal';
import { ButtonsWrapper, Content } from './Modal.styles';

const ModalAddExercise = ({ closeModal, ...props }) => {
  return (
    <Modal closeModal={closeModal} {...props}>
      <Content as="form">
        <SrOnly id="modal__description">
          Fill form to add new exercise to workout
        </SrOnly>
        <div>
          <FormField
            label="name:"
            type="text"
            id="exercise-name"
            placeholder="exercise name"
            isColumn
          />
          <div>
            <p>repetitions:</p>

            <FormField
              label="reps"
              type="radio"
              id="reps"
              value="reps"
              name="repetitions-type"
            />

            <FormField
              label="seconds"
              type="radio"
              id="seconds"
              value="seconds"
              name="repetitions-type"
            />
          </div>
        </div>
        <ButtonsWrapper>
          <Button type="button" onClick={closeModal}>
            cancel
          </Button>
          <Button type="button" isPrimary>
            add
          </Button>
        </ButtonsWrapper>
      </Content>
    </Modal>
  );
};

export default ModalAddExercise;
