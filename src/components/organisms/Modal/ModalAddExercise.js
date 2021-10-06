import { Button } from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
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
          <StyledLabel htmlFor="exercise-name">name: </StyledLabel>
          <Input type="text" id="exercise-name" placeholder="exercise name" />
        </FormField>
        <div>
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

const StyledRadio = styled.input`
  accent-color: ${({ theme }) => theme.color.purple};
  margin-right: 10px;
`;
const FormField = styled.div`
  display: flex;
  flex-direction: ${({ isColumn }) => isColumn && 'column'};
  align-items: flex-start;

  align-self: flex-start;
`;
const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.black};
`;
