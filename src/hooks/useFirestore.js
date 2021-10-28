import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  doc,
  addDoc,
  deleteDoc,
  query,
  orderBy,
} from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';
import dayjs from 'dayjs';
import { createContext, useContext, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { getLocalStorage, setLocalStorage } from 'helpers/expiryLocalStorage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRESTORE_KEY,
  authDomain: process.env.REACT_APP_FIRESTORE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIRESTORE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIRESTORE_SENDER_ID,
  appId: process.env.REACT_APP_FIRESTORE_APP_ID,
};

const FirestoreContext = createContext({});

export const FirestoreProvider = ({ children }) => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();

  const [user, setUser] = useState(getLocalStorage('user'));

  onAuthStateChanged(auth, (user) => {
    setUser(user);
    setLocalStorage('user', user);
  });

  const getWorkouts = async () => {
    if (!user?.uid) return [];
    const workoutQuery = query(
      collection(db, `users/${user.uid}/workouts`),
      orderBy('date', 'desc')
    );
    const workoutsSnapshot = await getDocs(workoutQuery);
    const workoutsList = workoutsSnapshot.docs.map((doc) => {
      const workoutData = doc.data();
      return {
        id: doc.id,
        ...workoutData,
        date: dayjs(workoutData.date.toDate()).format('YYYY-MM-DD'),
      };
    });
    return workoutsList;
  };

  const getWorkoutById = async (workoutId) => {
    if (!user?.uid) return;
    const workoutSnapshot = await getDoc(
      doc(db, `users/${user.uid}/workouts/${workoutId}`)
    );
    const workoutData = workoutSnapshot.data();
    return {
      id: workoutId,
      ...workoutData,
      date: dayjs(workoutData.date.toDate()).format('YYYY-MM-DD'),
    };
  };

  const addWorkout = (workout) => {
    if (!user?.uid) return;
    return addDoc(collection(db, `users/${user.uid}/workouts`), workout);
  };

  const deleteWorkout = (workoutId) => {
    if (!user?.uid) return;
    return deleteDoc(doc(db, `users/${user.uid}/workouts/${workoutId}`));
  };

  const updateWorkout = (workout, workoutId) => {
    if (!user?.uid) return;
    return setDoc(doc(db, `users/${user.uid}/workouts/${workoutId}`), workout);
  };
  const addUser = (userId) => {
    return setDoc(doc(db, 'users', userId), {});
  };

  return (
    <FirestoreContext.Provider
      value={{
        getWorkouts,
        getWorkoutById,
        addWorkout,
        deleteWorkout,
        updateWorkout,
        auth,
        addUser,
        user,
      }}
    >
      {children}
    </FirestoreContext.Provider>
  );
};

export const useFirestore = () => {
  const firestore = useContext(FirestoreContext);
  return firestore;
};
