import React, { useEffect, useRef } from 'react';
import {
  Wrapper,
  WorkoutListItem,
  WorkoutName,
  WorkoutDate,
} from './WorkoutList.styles';

const WorkoutList = ({ data, getMoreWorkouts, handleOpenWorkoutDetails }) => {
  const observingItemRef = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          getMoreWorkouts();
        }
      },
      {
        root: document,
        threshold: 0.5,
      }
    );

    if (observingItemRef.current) {
      observer.current.observe(observingItemRef.current);
    }

    return () => {
      observer.current.disconnect();
    };
  }, [getMoreWorkouts]);

  return (
    <Wrapper>
      {data.map((workout, index) => {
        const itemProps = {
          key: workout.id,
          tabIndex: 0,
          onClick: () => handleOpenWorkoutDetails(workout),
        };

        if (index === data.length - 2) {
          itemProps['ref'] = observingItemRef;
        }
        return (
          <WorkoutListItem {...itemProps}>
            <WorkoutName>{workout.title}</WorkoutName>
            <WorkoutDate>{workout.date}</WorkoutDate>
          </WorkoutListItem>
        );
      })}
    </Wrapper>
  );
};

export default WorkoutList;
