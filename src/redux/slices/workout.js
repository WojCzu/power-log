import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

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
      return state;
    },
    deleteExercise: (state, action) => {
      return state;
    },
    addSet: (state, action) => {
      return state;
    },
    deleteSet: (state, action) => {
      return state;
    },
    changeInput: (state, action) => {
      return state;
    },
    resetState: (state, action) => {
      return state;
    },
    setState: (state, action) => {
      return state;
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
