import React from 'react';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { useFirestore } from 'hooks/useFirestore';
import { WorkoutProvider } from 'hooks/useWorkout';
import UnauthenticatedApp from './UnauthenticatedApp/UnauthenticatedApp';
import AuthenticatedApp from './AuthenticatedApp/AuthenticatedApp';
import { Provider } from 'react-redux';
import store from 'redux/store';
const Root = () => {
  const { user } = useFirestore();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {user ? (
          <Provider store={store}>
            <WorkoutProvider>
              <AuthenticatedApp />
            </WorkoutProvider>
          </Provider>
        ) : (
          <UnauthenticatedApp />
        )}
      </ThemeProvider>
    </Router>
  );
};

export default Root;
