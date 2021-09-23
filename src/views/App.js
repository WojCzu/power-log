import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import Workouts from 'components/templates/Workouts/Workouts';
import { Wrapper } from './App.styles';

const App = () => (
  <Wrapper>
    <Navigation />
    <Workouts />
  </Wrapper>
);

export default App;
