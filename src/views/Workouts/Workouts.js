import React, { useState } from 'react';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import WorkoutList from 'components/organisms/WorkoutList/WorkoutList';
import { Wrapper, WorkoutHistory, Title } from './Workouts.styles';
import { SrOnly } from 'components/atoms/SrOnly/SrOnly';
import { useModal } from 'hooks/useModal';
import Modal from 'components/organisms/Modal/Modal';
import { useFirestore } from 'hooks/useFirestore';
import WorkoutDetails from 'components/molecules/WorkoutDetails/WorkoutDetails';

const Workouts = () => {
  const { isModalOpen, toggleOpenModal } = useModal();
  const [currentWorkout, setCurrentWorkout] = useState(null);
  const { getWorkoutById, deleteWorkout } = useFirestore();

  const handleOpenWorkoutDetails = async (id) => {
    const workout = await getWorkoutById(id);
    setCurrentWorkout(workout);
    toggleOpenModal();
  };

  const handleDelete = (workoutId) => {
    deleteWorkout(workoutId).then(() => {
      toggleOpenModal();
      setCurrentWorkout(null);
    });
  };

  return (
    <Wrapper>
      <Button as={Link} to="/workouts/add" $isPrimary>
        add new workout
      </Button>
      <WorkoutHistory>
        <Title>History</Title>
        <SrOnly>Click on the workout to see details</SrOnly>
        <WorkoutList handleOpenWorkoutDetails={handleOpenWorkoutDetails} />
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            closeModal={toggleOpenModal}
            modalTitle={currentWorkout.title}
          >
            <WorkoutDetails
              currentWorkout={currentWorkout}
              handleDelete={handleDelete}
            />
          </Modal>
        )}
      </WorkoutHistory>
    </Wrapper>
  );
};

export default Workouts;
