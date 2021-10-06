import { Button } from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';
import { SrOnly } from 'components/atoms/SrOnly/SrOnly';
import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { ButtonsWrapper, Content } from './Modal.styles';

const ModalAddExercise = ({ closeModal, ...props }) => {
  return (
    <Modal closeModal={closeModal} {...props}>
      <Content as="form">
        <SrOnly id="modal__description">
          Fill form to add new exercise to workout
        </SrOnly>
        <FormField isColumn>
          <Label htmlFor="exercise-name">name: </Label>
          <Input type="text" id="exercise-name" placeholder="exercise name" />
        </FormField>
        <div>
          <p>repetitions:</p>
          <div>
            <Input
              type="radio"
              id="reps"
              value="reps"
              name="repetitions-type"
            />
            <Label isBig htmlFor="reps">
              reps
            </Label>
          </div>
          <div>
            <Input
              type="radio"
              id="seconds"
              value="seconds"
              name="repetitions-type"
            />
            <Label isBig htmlFor="seconds">
              seconds
            </Label>
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

const FormField = styled.div`
  display: flex;
  flex-direction: ${({ isColumn }) => isColumn && 'column'};
  align-items: flex-start;

  align-self: flex-start;
`;
