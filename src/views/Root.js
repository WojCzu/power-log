import React from 'react';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import App from './App';

const Root = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </>
);

export default Root;
