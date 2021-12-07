import React, { useEffect, useRef } from 'react';
import {
  Wrapper,
  WorkoutListItem,
  WorkoutName,
  WorkoutDate,
} from './WorkoutList.styles';
import { getWorkouts, getMoreWorkouts } from 'redux/thunks/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { useFirestore } from 'hooks/useFirestore';

const WorkoutList = ({ handleOpenWorkoutDetails }) => {
  const observingItemRef = useRef(null);
  const observer = useRef(null);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.firebase.workouts);
  const { db, user } = useFirestore();

  useEffect(() => {
    dispatch(getWorkouts({ db, uid: user.uid }));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          dispatch(getMoreWorkouts({ db, uid: user.uid }));
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
  }, [db, dispatch, user.uid, data]);

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
