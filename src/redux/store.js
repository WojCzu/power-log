import { configureStore } from '@reduxjs/toolkit';
import workoutReducer from './slices/workout';
import firebaseReducer from './slices/firebase';

const store = configureStore({
  reducer: {
    workout: workoutReducer,
    firebase: firebaseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ['meta.arg', 'payload.lastVisible'],
        ignoredPaths: ['firebase.lastVisible'],
      },
    }),
});

export default store;
