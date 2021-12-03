import { createSlice } from '@reduxjs/toolkit';
import {
  getWorkouts,
  getWorkoutById,
  addWorkout,
  deleteWorkout,
  updateWorkout,
} from 'redux/thunks/firebase';

const firebaseSlice = createSlice({
  name: 'firebase',
  initialState: {
    workouts: [],
    workout: {},
    loading: false,
  },
  reducers: {},
  extraReducers: {
    // getWorkouts
    [getWorkouts.pending]: (state) => {
      state.loading = true;
    },
    [getWorkouts.fulfilled]: (state, { payload }) => {
      state.workouts = payload;
      state.loading = false;
    },
    [getWorkouts.rejected]: (state) => {
      state.loading = false;
    },
    // getWorkoutById
    [getWorkoutById.pending]: (state) => {
      state.loading = true;
    },
    [getWorkoutById.fulfilled]: (state, { payload }) => {
      state.workout = payload;
      state.loading = false;
    },
    [getWorkoutById.rejected]: (state) => {
      state.loading = false;
    },
    //addWorkout
    [addWorkout.pending]: (state) => {
      state.loading = true;
    },
    [addWorkout.fulfilled]: (state) => {
      state.loading = false;
    },
    [addWorkout.rejected]: (state) => {
      state.loading = false;
    },
    // deleteWorkout
    [deleteWorkout.pending]: (state) => {
      state.loading = true;
    },
    [deleteWorkout.fulfilled]: (state) => {
      state.loading = false;
    },
    [deleteWorkout.rejected]: (state) => {
      state.loading = false;
    },
    // updateWorkout
    [updateWorkout.pending]: (state) => {
      state.loading = true;
    },
    [updateWorkout.fulfilled]: (state) => {
      state.loading = false;
    },
    [updateWorkout.rejected]: (state) => {
      state.loading = false;
    },
  },
});

const { reducer } = firebaseSlice;
export default reducer;
