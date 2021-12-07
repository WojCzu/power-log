import { createSlice } from '@reduxjs/toolkit';
import {
  getWorkouts,
  getMoreWorkouts,
  addWorkout,
  deleteWorkout,
  updateWorkout,
} from 'redux/thunks/firebase';

const firebaseSlice = createSlice({
  name: 'firebase',
  initialState: {
    workouts: [],
    lastVisible: null,
    loading: {
      workouts: false,
      add: false,
      update: false,
      delete: false,
    },
  },
  reducers: {},
  extraReducers: {
    // getWorkouts
    [getWorkouts.pending]: (state) => {
      state.loading.workouts = true;
    },
    [getWorkouts.fulfilled]: (state, { payload }) => {
      state.workouts = payload.result;
      state.lastVisible = payload.lastVisible;
      state.loading.workouts = false;
    },
    [getWorkouts.rejected]: (state) => {
      state.loading.workouts = false;
    },
    // getMoreWorkouts
    [getMoreWorkouts.pending]: (state) => {
      state.loading.workouts = true;
    },
    [getMoreWorkouts.fulfilled]: (state, { payload }) => {
      state.workouts.push(...payload.result);
      state.lastVisible = payload.lastVisible;
      state.loading.workouts = false;
    },
    [getMoreWorkouts.rejected]: (state) => {
      state.loading.workouts = false;
    },
    //addWorkout
    [addWorkout.pending]: (state) => {
      state.loading.add = true;
    },
    [addWorkout.fulfilled]: (state, { payload }) => {
      state.workouts.push(payload.workout);
      state.loading.add = false;
    },
    [addWorkout.rejected]: (state) => {
      state.loading.add = false;
    },
    // deleteWorkout
    [deleteWorkout.pending]: (state) => {
      state.loading.delete = true;
    },
    [deleteWorkout.fulfilled]: (state, { payload }) => {
      state.workouts = state.workouts.filter(
        ({ id }) => id !== payload.workoutId
      );
      state.loading.delete = false;
    },
    [deleteWorkout.rejected]: (state) => {
      state.loading.delete = false;
    },
    // updateWorkout
    [updateWorkout.pending]: (state) => {
      state.loading.update = true;
    },
    [updateWorkout.fulfilled]: (state, { payload }) => {
      const index = state.workouts.findIndex(
        ({ id }) => id === payload.workout.id
      );
      state.workouts[index] = payload.workout;
      state.loading.update = false;
    },
    [updateWorkout.rejected]: (state) => {
      state.loading.update = false;
    },
  },
});

const { reducer } = firebaseSlice;
export default reducer;
