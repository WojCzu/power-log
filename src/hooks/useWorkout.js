import React, { useReducer, useContext } from 'react';
import { v4 as uuid } from 'uuid';

const actionTypes = {
  addExercise: 'ADD_EXERCISE',
  deleteExercise: 'DELETE_EXERCISE',
  addSet: 'ADD_SET',
  deleteSet: 'DELETE_SET',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.addExercise:
      const exercises = state.exercises;
      return {
        ...state,
        exercises: [
          ...exercises,
          {
            id: uuid(),
            name: action.payload.name,
            volumeType: action.payload.volumeType,
            sets: [{ id: uuid(), weight: '', volume: '' }],
          },
        ],
      };

    case actionTypes.deleteExercise:
      const exercisesAfterDelete = state.exercises.filter(
        ({ id }) => id !== action.payload.id
      );
      return { ...state, exercises: [...exercisesAfterDelete] };

    case actionTypes.addSet:
      const exercisesWithNewSet = state.exercises.map((exercise) => {
        if (exercise.id === action.payload.exerciseId) {
          const sets = exercise.sets;
          return {
            ...exercise,
            sets: [...sets, { id: uuid(), weight: '', volume: '' }],
          };
        }
        return exercise;
      });
      return { ...state, exercises: [...exercisesWithNewSet] };

    case actionTypes.deleteSet:
      const exercisesAfterDeleteSet = state.exercises.map((exercise) => {
        if (exercise.id === action.payload.exerciseId) {
          const sets = exercise.sets.filter(
            ({ id }) => id !== action.payload.id
          );
          return { ...exercise, sets };
        }
        return exercise;
      });
      return { ...state, exercises: [...exercisesAfterDeleteSet] };

    default:
      return state;
  }
};

const WorkoutContext = React.createContext({});
const today = new Date().toISOString().split('T')[0];
const initialState = { date: today, name: '', exercises: [], notes: '' };
//TODO - localStorage workout && initialState - clear localStorage after submit

export const WorkoutProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);

  const addExercise = (name, volumeType) => {
    dispatch({
      type: actionTypes.addExercise,
      payload: { name, volumeType },
    });
  };

  const deleteExercise = (id) => {
    dispatch({ type: actionTypes.deleteExercise, payload: { id } });
  };

  const addSet = (exerciseId) => {
    dispatch({ type: actionTypes.addSet, payload: { exerciseId } });
  };

  const deleteSet = (exerciseId, id) => {
    dispatch({ type: actionTypes.deleteSet, payload: { exerciseId, id } });
  };

  return (
    <WorkoutContext.Provider
      value={{ data, addExercise, deleteExercise, addSet, deleteSet }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkout = () => {
  const workout = useContext(WorkoutContext);
  return workout;
};
