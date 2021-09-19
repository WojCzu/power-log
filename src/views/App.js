import React from 'react';
import Navigation from 'components/Navigation/Navigation';
import Workouts from 'components/Workouts/Workouts';
import { Wrapper } from './App.styles';

const App = () => (
  <Wrapper>
    <Navigation />
    <Workouts />
  </Wrapper>
);

export default App;
