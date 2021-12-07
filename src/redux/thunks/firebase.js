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
  startAfter,
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
    const lastVisible = snapshot.docs[snapshot.docs.length - 1];
    const result = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        date: dayjs(data.date.toDate()).format('YYYY-MM-DD'),
      };
    });
    return { result, lastVisible };
  }
);
export const getMoreWorkouts = createAsyncThunk(
  'firebase/getMoreWorkouts',
  async ({ db, uid }, { getState }) => {
    const wq = query(
      collection(db, `users/${uid}/workouts`),
      orderBy('date', 'desc'),
      startAfter(getState().firebase.lastVisible),
      limit(25)
    );
    const snapshot = await getDocs(wq);
    const lastVisible = snapshot.docs[snapshot.docs.length - 1];
    const result = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        date: dayjs(data.date.toDate()).format('YYYY-MM-DD'),
      };
    });
    return { result, lastVisible };
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
    const docRef = await addDoc(collection(db, `users/${uid}/workouts`), {
      ...workout,
      date: new Date(workout.date),
    });
    return {
      workout: {
        id: docRef.id,
        ...workout,
      },
    };
  }
);
export const deleteWorkout = createAsyncThunk(
  'firebase/deleteWorkout',
  async ({ db, uid, payload: { workoutId } }) => {
    await deleteDoc(doc(db, `users/${uid}/workouts/${workoutId}`));
    return { workoutId };
  }
);
export const updateWorkout = createAsyncThunk(
  'firebase/updateWorkout',
  async ({ db, uid, payload: { workout } }) => {
    await setDoc(doc(db, `users/${uid}/workouts/${workout.id}`), {
      ...workout,
      date: new Date(workout.date),
    });
    return { workout };
  }
);
