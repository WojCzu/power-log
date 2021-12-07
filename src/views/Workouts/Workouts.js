import React, { useState } from 'react';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import WorkoutList from 'components/organisms/WorkoutList/WorkoutList';
import { Wrapper, WorkoutHistory, Title } from './Workouts.styles';
import { SrOnly } from 'components/atoms/SrOnly/SrOnly';
import { useModal } from 'hooks/useModal';
import { useFirestore } from 'hooks/useFirestore';
import WorkoutDetails from 'components/organisms/WorkoutDetails/WorkoutDetails';
import routes from 'utils/routes';
import { useDispatch } from 'react-redux';
import { deleteWorkout } from 'redux/thunks/firebase';

const Workouts = () => {
  const { isModalOpen, toggleOpenModal } = useModal();
  const { db, user } = useFirestore();
  const [currentWorkout, setCurrentWorkout] = useState(null);

  const dispatch = useDispatch();

  const handleOpenWorkoutDetails = (workout) => {
    setCurrentWorkout(workout);
    toggleOpenModal();
  };

  const handleDelete = (workoutId) => {
    dispatch(deleteWorkout({ db, uid: user.uid, payload: { workoutId } }));
    toggleOpenModal();
    setCurrentWorkout(null);
  };

  return (
    <Wrapper>
      <Button as={Link} to={routes.addWorkout} $isPrimary>
        add new workout
      </Button>
      <WorkoutHistory>
        <Title>History</Title>
        <SrOnly>Click on the workout to see details</SrOnly>
        <WorkoutList handleOpenWorkoutDetails={handleOpenWorkoutDetails} />
        {isModalOpen && (
          <WorkoutDetails
            isOpen={isModalOpen}
            closeModal={toggleOpenModal}
            currentWorkout={currentWorkout}
            handleDelete={handleDelete}
          />
        )}
      </WorkoutHistory>
    </Wrapper>
  );
};

export default Workouts;
