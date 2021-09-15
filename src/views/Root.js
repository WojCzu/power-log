import React from 'react';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

const Root = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>Hello</h1>
    </ThemeProvider>
  </>
);

export default Root;
