import React, { useEffect, useState } from 'react';
import {
  Wrapper,
  WorkoutListItem,
  WorkoutName,
  WorkoutDate,
} from './WorkoutList.styles';
import { useFirestore } from 'hooks/useFirestore';

const WorkoutList = ({ handleOpenWorkoutDetails }) => {
  const { getWorkouts } = useFirestore();
  const [data, setData] = useState([]);

  useEffect(() => {
    getWorkouts().then((workouts) => setData(workouts));
  }, [getWorkouts]);

  return (
    <Wrapper>
      {data.map((workout) => (
        <WorkoutListItem
          key={workout.id}
          tabIndex={0}
          onClick={() => handleOpenWorkoutDetails(workout)}
        >
          <WorkoutName>{workout.title}</WorkoutName>
          <WorkoutDate>{workout.date}</WorkoutDate>
        </WorkoutListItem>
      ))}
    </Wrapper>
  );
};

export default WorkoutList;
