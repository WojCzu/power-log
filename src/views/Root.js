import React from 'react';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import App from './App/App';
import { WorkoutProvider } from 'hooks/useWorkout';
import { FirestoreProvider } from 'hooks/useFirestore';

const Root = () => (
  <>
    <ThemeProvider theme={theme}>
      <FirestoreProvider>
        <WorkoutProvider>
          <GlobalStyles />
          <App />
        </WorkoutProvider>
      </FirestoreProvider>
    </ThemeProvider>
  </>
);

export default Root;
