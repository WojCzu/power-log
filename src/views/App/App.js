import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import Navigation from 'components/organisms/Navigation/Navigation';
import Workouts from 'views/Workouts/Workouts';
import AddWorkout from 'views/AddWorkout/AddWorkout';
import { Wrapper } from './App.styles';

const App = () => (
  <Wrapper>
    <Navigation />
    <Router>
      <Switch>
        <Route exact path="/workouts">
          <Workouts />
        </Route>
        <Route exact path="/workouts/add">
          <AddWorkout />
        </Route>
        <Route path="/">
          <Redirect to="/workouts" />
        </Route>
      </Switch>
    </Router>
  </Wrapper>
);

export default App;
