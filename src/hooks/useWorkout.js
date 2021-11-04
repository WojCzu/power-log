import React, { useReducer, useContext, createContext, useState } from 'react';
import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';
import { getLocalStorage, setLocalStorage } from 'helpers/expiryLocalStorage';

const actionTypes = {
  addExercise: 'ADD_EXERCISE',
  deleteExercise: 'DELETE_EXERCISE',
  addSet: 'ADD_SET',
  deleteSet: 'DELETE_SET',
  inputChange: 'INPUT_CHANGE',
  resetState: 'RESET_STATE',
  setState: 'SET_STATE',
};

const reducer = (state, action) => {
  let isItemRemoved = false;
  let newState = state;
  try {
    switch (action.type) {
      case actionTypes.addExercise:
        newState = {
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
        return newState;

      case actionTypes.deleteExercise:
        const exercisesAfterDelete = state.exercises.filter(
          ({ id }) => id !== action.payload.id
        );
        newState = { ...state, exercises: [...exercisesAfterDelete] };
        return newState;

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
        newState = { ...state, exercises: [...exercisesWithNewSet] };
        return newState;

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
        newState = { ...state, exercises: [...exercisesAfterDeleteSet] };
        return newState;

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
        } else {
          state[action.payload.field] = action.payload.value;
        }
        newState = { ...state };
        return newState;

      case actionTypes.resetState:
        if (action.payload.isSaveEnabled) {
          localStorage.removeItem('workout');
        }
        isItemRemoved = true;
        return {
          date: dayjs().format('YYYY-MM-DD'),
          title: '',
          exercises: [],
          notes: '',
        };

      case actionTypes.setState:
        return { ...action.payload.workout };

      default:
        return state;
    }
  } finally {
    if (!isItemRemoved && action.payload.isSaveEnabled) {
      setLocalStorage('workout', newState, 4 * 60 * 60 * 1000);
    }
  }
};

const WorkoutContext = createContext({});

export const WorkoutProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, null);
  const [isSaveEnabled, setIsSaveEnabled] = useState(false);
  const addExercise = (name, volumeType) => {
    dispatch({
      type: actionTypes.addExercise,
      payload: { name, volumeType, isSaveEnabled },
    });
  };

  const deleteExercise = (id) => {
    dispatch({
      type: actionTypes.deleteExercise,
      payload: { id, isSaveEnabled },
    });
  };

  const addSet = (exerciseId) => {
    dispatch({
      type: actionTypes.addSet,
      payload: { exerciseId, isSaveEnabled },
    });
  };

  const deleteSet = (exerciseId, id) => {
    dispatch({
      type: actionTypes.deleteSet,
      payload: { exerciseId, id, isSaveEnabled },
    });
  };

  const handleInputChange = (field, value, exerciseId, setId) => {
    dispatch({
      type: actionTypes.inputChange,
      payload: { field, value, exerciseId, setId, isSaveEnabled },
    });
  };

  const resetState = () => {
    dispatch({ type: actionTypes.resetState, payload: { isSaveEnabled } });
  };

  const setInitialState = ({ workout, save }) => {
    setIsSaveEnabled(save);
    if (workout) {
      dispatch({ type: actionTypes.setState, payload: { workout } });
    } else {
      const initialState = getLocalStorage('workout') ?? {
        date: dayjs().format('YYYY-MM-DD'),
        title: '',
        exercises: [],
        notes: '',
      };
      dispatch({
        type: actionTypes.setState,
        payload: { workout: initialState },
      });
    }
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
        setInitialState,
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
