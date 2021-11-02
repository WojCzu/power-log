import Accordion from 'components/organisms/Accordion/Accordion';
import Exercise from 'components/organisms/Exercise/Exercise';
import React, { useEffect, useState } from 'react';
import FormField from '../../molecules/FormField/FormField';
import dayjs from 'dayjs';
import { ButtonsWrapper } from './WorkoutDetails.styles';
import { Button } from 'components/atoms/Button/Button';
import { useWorkout } from 'hooks/useWorkout';
import { useModal } from 'hooks/useModal';
import { useFirestore } from 'hooks/useFirestore';
import Modal from 'components/molecules/Modal/Modal';
import AddExerciseForm from '../AddExerciseForm/AddExerciseForm';

const WorkoutDetails = ({
  isOpen,
  closeModal,
  currentWorkout,
  handleDelete,
}) => {
  const { isModalOpen, toggleOpenModal } = useModal();
  const { data, handleInputChange, setInitialState } = useWorkout();
  const [isEditDisabled, setIsEditDisabled] = useState(true);
  const { updateWorkout } = useFirestore();

  const toggleEdit = () => setIsEditDisabled((prevState) => !prevState);

  useEffect(() => {
    setInitialState({ workout: currentWorkout, save: false });
    // eslint-disable-next-line
  }, []);

  const handleUpdateWorkout = () => {
    updateWorkout(
      { date: new Date(currentWorkout.date), ...currentWorkout },
      currentWorkout.id
    ).then(() => setIsEditDisabled(true));
  };

  if (!data) {
    return <div>Loading...</div>;
  }
  const { id, date, exercises, notes } = data;

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      modalTitle={currentWorkout.title}
      titleButtons={[
        { icon: 'edit', fn: toggleEdit, text: 'edit workout' },
        { icon: 'cross', fn: closeModal, text: 'close details' },
      ]}
    >
      <>
        <FormField
          label="date:"
          type="date"
          id="starting-date"
          name="workout-start"
          value={dayjs(date).format('YYYY-MM-DD')}
          max={dayjs().format('YYYY-MM-DD')}
          isDisabled={isEditDisabled}
          required
          onChange={(e) => handleInputChange('date', e.target.value)}
        />
        {exercises.map(({ id, name, volumeType, sets }) => (
          <Exercise
            volumeType={volumeType}
            sets={sets}
            id={id}
            key={id}
            title={name}
            isDisabled={isEditDisabled}
          />
        ))}
        {!isEditDisabled && (
          <Button
            $isPrimary
            $isFullWidth
            type="button"
            onClick={toggleOpenModal}
          >
            add exercise
          </Button>
        )}
        {isModalOpen && (
          <AddExerciseForm
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
            isDisabled={isEditDisabled}
            onChange={(e) => handleInputChange('notes', e.target.value)}
            isLabelHidden
          />
        </Accordion>
        <ButtonsWrapper>
          <Button onClick={toggleEdit}>
            {isEditDisabled ? 'Edit' : 'Cancel edit'}
          </Button>
          {isEditDisabled ? (
            <Button $isPrimary onClick={() => handleDelete(id)}>
              Delete
            </Button>
          ) : (
            <Button
              $isPrimary
              onClick={() =>
                handleUpdateWorkout({ id, date, exercises, notes })
              }
            >
              Save edit
            </Button>
          )}
        </ButtonsWrapper>
      </>
    </Modal>
  );
};

export default WorkoutDetails;
