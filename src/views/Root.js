import React from 'react';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import App from './App/App';
import { WorkoutProvider } from 'hooks/useWorkout';

const Root = () => (
  <>
    <ThemeProvider theme={theme}>
      <WorkoutProvider>
        <GlobalStyles />
        <App />
      </WorkoutProvider>
    </ThemeProvider>
  </>
);

export default Root;
