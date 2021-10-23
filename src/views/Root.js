import React from 'react';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { useFirestore } from 'hooks/useFirestore';
import { WorkoutProvider } from 'hooks/useWorkout';
import UnuthenticatedApp from './UnuthenticatedApp/UnuthenticatedApp';
import AuthenticatedApp from './AuthenticatedApp/AuthenticatedApp';

const Root = () => {
  const { user } = useFirestore();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {user ? (
          <WorkoutProvider>
            <AuthenticatedApp />
          </WorkoutProvider>
        ) : (
          <UnuthenticatedApp />
        )}
      </ThemeProvider>
    </Router>
  );
};

export default Root;
