import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';

const initialState = {
  date: dayjs().format('YYYY-MM-DD'),
  title: '',
  exercises: [],
  notes: '',
};

const workoutSlice = createSlice({
  name: 'workout',
  initialState,
  reducers: {
    addExercise: (state, action) => {
      state.exercises.push({
        id: uuid(),
        name: action.payload.exerciseName,
        volumeType: action.payload.volumeType,
        sets: [{ id: uuid(), weight: '', volume: '' }],
      });
    },
    deleteExercise: (state, action) => {
      return {
        ...state,
        exercises: state.exercises.filter(({ id }) => id !== action.payload.id),
      };
    },
    addSet: (state, action) => {
      state.exercises
        .find(({ id }) => id === action.payload.id)
        .sets.push({ id: uuid(), weight: '', volume: '' });
    },
    deleteSet: (state, action) => {
      const exerciseIndex = state.exercises.findIndex(
        ({ id }) => id === action.payload.exerciseId
      );
      const setIndex = state.exercises[exerciseIndex].sets.findIndex(
        ({ id }) => id === action.payload.id
      );

      state.exercises[exerciseIndex].sets.splice(setIndex, 1);
    },
    changeInput: (state, action) => {
      if (
        action.payload.field === 'weight' ||
        action.payload.field === 'volume'
      ) {
        const exerciseIndex = state.exercises.findIndex(
          ({ id }) => id === action.payload.exerciseId
        );
        const setIndex = state.exercises[exerciseIndex].sets.findIndex(
          ({ id }) => id === action.payload.id
        );
        state.exercises[exerciseIndex].sets[setIndex][action.payload.field] =
          action.payload.value;
      } else {
        state[action.payload.field] = action.payload.value;
      }
    },
    resetState: () => {
      return initialState;
    },
    setState: (_, action) => {
      return { ...action.payload.workout };
    },
  },
});

const { actions, reducer } = workoutSlice;

export const {
  addExercise,
  deleteExercise,
  addSet,
  deleteSet,
  changeInput,
  resetState,
  setState,
} = actions;

export default reducer;
