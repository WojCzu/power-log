import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';
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

  const addUser = (userId) => {
    return setDoc(doc(db, 'users', userId), {});
  };

  return (
    <FirestoreContext.Provider
      value={{
        auth,
        addUser,
        user,
        db,
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
