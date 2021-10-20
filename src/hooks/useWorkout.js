import React, { useReducer, useContext, createContext } from 'react';
import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';

const actionTypes = {
  addExercise: 'ADD_EXERCISE',
  deleteExercise: 'DELETE_EXERCISE',
  addSet: 'ADD_SET',
  deleteSet: 'DELETE_SET',
  inputChange: 'INPUT_CHANGE',
  resetState: 'RESET_STATE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.addExercise:
      return {
        ...state,
        exercises: [
          ...state.exercises,
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
          return {
            ...exercise,
            sets: [...exercise.sets, { id: uuid(), weight: '', volume: '' }],
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

    case actionTypes.inputChange:
      if (
        action.payload.field === 'weight' ||
        action.payload.field === 'volume'
      ) {
        const exerciseToChange = state.exercises.find(
          ({ id }) => id === action.payload.exerciseId
        );

        const setToChange = exerciseToChange.sets.find(
          ({ id }) => id === action.payload.setId
        );

        setToChange[action.payload.field] = action.payload.value;

        return { ...state };
      }

      state[action.payload.field] = action.payload.value;
      return { ...state };

    case actionTypes.resetState:
      return { ...initialState };
    default:
      return state;
  }
};

const WorkoutContext = createContext({});
const initialState = {
  date: dayjs().format('YYYY-MM-DD'),
  title: '',
  exercises: [],
  notes: '',
};
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

  const handleInputChange = (field, value, exerciseId, setId) => {
    dispatch({
      type: actionTypes.inputChange,
      payload: { field, value, exerciseId, setId },
    });
  };

  const resetState = () => {
    dispatch({ type: actionTypes.resetState });
  };

  return (
    <WorkoutContext.Provider
      value={{
        data,
        addExercise,
        deleteExercise,
        addSet,
        deleteSet,
        handleInputChange,
        resetState,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkout = () => {
  const workout = useContext(WorkoutContext);
  return workout;
};
