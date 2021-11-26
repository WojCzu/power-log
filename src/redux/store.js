import { configureStore } from '@reduxjs/toolkit';
import workoutReducer from './slices/workout';

const store = configureStore({
  reducer: {
    workout: workoutReducer,
  },
});

export default store;
