import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
  addDoc,
  query,
  orderBy,
} from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';
import dayjs from 'dayjs';
import { createContext, useContext, useEffect, useState } from 'react';
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
  const [data, setData] = useState([]);
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();

  const [user, setUser] = useState(getLocalStorage('user'));

  onAuthStateChanged(auth, (user) => {
    setUser(user);
    setLocalStorage('user', user);
  });

  useEffect(() => {
    const getData = async () => {
      const workoutQuery = query(
        collection(db, 'workouts'),
        orderBy('date', 'desc')
      );
      const workoutsSnapshot = await getDocs(workoutQuery);
      const workoutsList = workoutsSnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          date: dayjs(data.date.toDate()).format('DD/MM/YYYY'),
        };
      });
      return workoutsList;
    };
    getData().then((data) => setData(data));
  }, [db]);

  const getWorkoutById = (id) => {
    return data.find((workout) => workout.id === id);
  };

  const addWorkout = (workout) => {
    return addDoc(collection(db, 'workouts'), workout);
  };

  const addUser = (userId) => {
    return setDoc(doc(db, 'users', userId), {});
  };

  return (
    <FirestoreContext.Provider
      value={{ data, getWorkoutById, addWorkout, addUser, auth, user }}
    >
      {children}
    </FirestoreContext.Provider>
  );
};

export const useFirestore = () => {
  const firestore = useContext(FirestoreContext);
  return firestore;
};
