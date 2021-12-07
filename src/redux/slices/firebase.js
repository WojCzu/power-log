import { createSlice } from '@reduxjs/toolkit';
import {
  getWorkouts,
  getWorkoutById,
  getMoreWorkouts,
  addWorkout,
  deleteWorkout,
  updateWorkout,
} from 'redux/thunks/firebase';

const firebaseSlice = createSlice({
  name: 'firebase',
  initialState: {
    workouts: [],
    workout: {},
    lastVisible: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    // getWorkouts
    [getWorkouts.pending]: (state) => {
      state.loading = true;
    },
    [getWorkouts.fulfilled]: (state, { payload }) => {
      state.workouts = payload.result;
      state.lastVisible = payload.lastVisible;
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
    // getMoreWorkouts
    [getMoreWorkouts.pending]: (state) => {
      state.loading = true;
    },
    [getMoreWorkouts.fulfilled]: (state, { payload }) => {
      state.workouts.push(...payload.result);
      state.lastVisible = payload.lastVisible;
      state.loading = false;
    },
    [getMoreWorkouts.rejected]: (state) => {
      state.loading = false;
    },
    //addWorkout
    [addWorkout.pending]: (state) => {
      state.loading = true;
    },
    [addWorkout.fulfilled]: (state, { payload }) => {
      state.workouts.push(payload.workout);
      state.loading = false;
    },
    [addWorkout.rejected]: (state) => {
      state.loading = false;
    },
    // deleteWorkout
    [deleteWorkout.pending]: (state) => {
      state.loading = true;
    },
    [deleteWorkout.fulfilled]: (state, { payload }) => {
      state.workouts = state.workouts.filter(
        ({ id }) => id !== payload.workoutId
      );
      state.loading = false;
    },
    [deleteWorkout.rejected]: (state) => {
      state.loading = false;
    },
    // updateWorkout
    [updateWorkout.pending]: (state) => {
      state.loading = true;
    },
    [updateWorkout.fulfilled]: (state, { payload }) => {
      const index = state.workouts.findIndex(
        ({ id }) => id === payload.workout.id
      );
      state.workouts[index] = payload.workout;
      state.loading = false;
    },
    [updateWorkout.rejected]: (state) => {
      state.loading = false;
    },
  },
});

const { reducer } = firebaseSlice;
export default reducer;
