import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import { FirestoreProvider } from 'hooks/useFirestore';

ReactDOM.render(
  <React.StrictMode>
    <FirestoreProvider>
      <Root />
    </FirestoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
