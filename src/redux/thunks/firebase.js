import { createAsyncThunk } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
  setDoc,
} from 'firebase/firestore/lite';

export const getWorkouts = createAsyncThunk(
  'firebase/getWorkouts',
  async ({ db, uid }) => {
    const wq = query(
      collection(db, `users/${uid}/workouts`),
      orderBy('date', 'desc'),
      limit(25)
    );
    const snapshot = await getDocs(wq);
    const result = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        date: dayjs(data.date.toDate()).format('YYYY-MM-DD'),
      };
    });
    return result;
  }
);

export const getWorkoutById = createAsyncThunk(
  'firebase/getWorkoutById',
  async ({ db, uid, payload: { workoutId } }) => {
    const snapshot = await getDoc(db, `users/${uid}/workouts/${workoutId}`);
    const data = snapshot.data();
    return {
      id: workoutId,
      ...data,
      date: dayjs(data.date.toDate()).format('YYYY-MM-DD'),
    };
  }
);

export const addWorkout = createAsyncThunk(
  'firebase/addWorkout',
  async ({ db, uid, payload: { workout } }) => {
    addDoc(collection(db, `users/${uid}/workouts`), workout);
  }
);
export const deleteWorkout = createAsyncThunk(
  'firebase/deleteWorkout',
  async ({ db, uid, payload: { workoutId } }) => {
    deleteDoc(doc(db, `users/${uid}/workouts/${workoutId}`));
  }
);
export const updateWorkout = createAsyncThunk(
  'firebase/updateWorkout',
  async ({ db, uid, payload: { workout, workoutId } }) => {
    setDoc(doc(db, `users/${uid}/workouts/${workoutId}`), workout);
  }
);
