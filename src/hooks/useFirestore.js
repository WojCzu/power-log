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
  limit,
  startAfter,
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

class CollectionEndpoints {
  constructor(userId) {
    this.userId = userId;
    this.workoutsList = `users/${userId}/workouts`;
  }
  workout = (id) => `${this.workoutsList}/${id}`;
}

const FirestoreContext = createContext({});

export const FirestoreProvider = ({ children }) => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();

  const [user, setUser] = useState(getLocalStorage('user'));
  const [lastVisibleDocument, setLastVisibleDocument] = useState(null);

  const collectionEndpoints = new CollectionEndpoints(user.uid);

  onAuthStateChanged(auth, (user) => {
    setUser(user);
    setLocalStorage('user', user);
  });

  const getWorkouts = async (firstRun) => {
    if (!user?.uid || typeof lastVisibleDocument == 'undefined') return [];
    let workoutQuery;
    if (firstRun) {
      workoutQuery = query(
        collection(db, collectionEndpoints.workoutsList),
        orderBy('date', 'desc'),
        limit(25)
      );
    } else {
      workoutQuery = query(
        collection(db, collectionEndpoints.workoutsList),
        orderBy('date', 'desc'),
        startAfter(lastVisibleDocument),
        limit(25)
      );
    }

    const workoutsSnapshot = await getDocs(workoutQuery);
    const lastVisibleWorkout =
      workoutsSnapshot.docs[workoutsSnapshot.docs.length - 1];
    setLastVisibleDocument(lastVisibleWorkout);
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
      doc(db, collectionEndpoints.workout(workoutId))
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
    return addDoc(collection(db, collectionEndpoints.workoutsList), workout);
  };

  const deleteWorkout = (workoutId) => {
    if (!user?.uid) return;
    return deleteDoc(doc(db, collectionEndpoints.workout(workoutId)));
  };

  const updateWorkout = (workout, workoutId) => {
    if (!user?.uid) return;
    return setDoc(doc(db, collectionEndpoints.workout(workoutId)), workout);
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
