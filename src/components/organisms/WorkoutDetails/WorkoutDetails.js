import Accordion from 'components/organisms/Accordion/Accordion';
import Exercise from 'components/organisms/Exercise/Exercise';
import React, { useEffect, useState } from 'react';
import FormField from '../../molecules/FormField/FormField';
import dayjs from 'dayjs';
import { ButtonsWrapper } from './WorkoutDetails.styles';
import { Button } from 'components/atoms/Button/Button';
import { useModal } from 'hooks/useModal';
import { useFirestore } from 'hooks/useFirestore';
import Modal from 'components/molecules/Modal/Modal';
import AddExerciseForm from '../AddExerciseForm/AddExerciseForm';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput, resetState, setState } from 'redux/slices/workout';
import { updateWorkout } from 'redux/thunks/firebase';

const WorkoutDetails = ({
  isOpen,
  closeModal,
  currentWorkout,
  handleDelete,
}) => {
  const { isModalOpen, toggleOpenModal } = useModal();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.workout);
  const { loading } = useSelector((state) => state.firebase);
  const [isEditDisabled, setIsEditDisabled] = useState(true);
  const { db, user } = useFirestore();

  const toggleEdit = () => setIsEditDisabled((prevState) => !prevState);

  useEffect(() => {
    dispatch(setState({ workout: currentWorkout }));
    // eslint-disable-next-line
  }, []);

  const handleUpdateWorkout = (workout) => {
    dispatch(
      updateWorkout({
        db,
        uid: user.uid,
        payload: { workout },
      })
    );
    toggleEdit();
  };

  if (!data) {
    return <div>Loading...</div>;
  }
  const { id, date, exercises, notes, title } = data;

  return (
    <Modal
      isOpen={isOpen}
      closeModal={() => {
        closeModal();
        dispatch(resetState());
      }}
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
          onChange={(e) =>
            dispatch(changeInput({ field: 'date', value: e.target.value }))
          }
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
            onChange={(e) =>
              dispatch(changeInput({ field: 'notes', value: e.target.value }))
            }
            isLabelHidden
          />
        </Accordion>
        <ButtonsWrapper>
          <Button onClick={toggleEdit}>
            {isEditDisabled ? 'Edit' : 'Cancel edit'}
          </Button>
          {isEditDisabled ? (
            <Button
              $isPrimary
              onClick={() => handleDelete(id)}
              disabled={loading.delete}
            >
              Delete
            </Button>
          ) : (
            <Button
              $isPrimary
              onClick={() =>
                handleUpdateWorkout({ id, date, exercises, notes, title })
              }
              disabled={loading.update}
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
