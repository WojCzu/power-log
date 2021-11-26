import React, { useEffect, useState } from 'react';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import WorkoutList from 'components/organisms/WorkoutList/WorkoutList';
import { Wrapper, WorkoutHistory, Title } from './Workouts.styles';
import { SrOnly } from 'components/atoms/SrOnly/SrOnly';
import { useModal } from 'hooks/useModal';
import { useFirestore } from 'hooks/useFirestore';
import WorkoutDetails from 'components/organisms/WorkoutDetails/WorkoutDetails';
import routes from 'utils/routes';
import { useSelector } from 'react-redux';

const Workouts = () => {
  const { isModalOpen, toggleOpenModal } = useModal();
  const { getWorkouts, deleteWorkout } = useFirestore();
  const [currentWorkout, setCurrentWorkout] = useState(null);
  const [data, setData] = useState([]);

  const reduxData = useSelector((state) => state.workout);
  console.log(reduxData);

  const handleOpenWorkoutDetails = (workout) => {
    setCurrentWorkout(workout);
    toggleOpenModal();
  };

  const handleDelete = (workoutId) => {
    deleteWorkout(workoutId).then(() => {
      toggleOpenModal();
      setCurrentWorkout(null);
      setData((prevData) => prevData.filter(({ id }) => id !== workoutId));
    });
  };

  const getData = () => {
    getWorkouts(false).then((workouts) =>
      setData((prevData) => [...prevData, ...workouts])
    );
  };

  useEffect(() => {
    getWorkouts(true).then((workouts) => setData(workouts));
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <Button as={Link} to={routes.addWorkout} $isPrimary>
        add new workout
      </Button>
      <WorkoutHistory>
        <Title>History</Title>
        <SrOnly>Click on the workout to see details</SrOnly>
        <WorkoutList
          data={data}
          getData={getData}
          handleOpenWorkoutDetails={handleOpenWorkoutDetails}
        />
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
