import { configureStore } from '@reduxjs/toolkit';
import workoutReducer from './slices/workout';
import firebaseReducer from './slices/firebase';

const store = configureStore({
  reducer: {
    workout: workoutReducer,
    firebase: firebaseReducer,
  },
});

export default store;
