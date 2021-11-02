import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from 'components/organisms/Navigation/Navigation';
import Workouts from 'views/Workouts/Workouts';
import AddWorkout from 'views/AddWorkout/AddWorkout';
import { Wrapper, App } from './AuthenticatedApp.js.styles';

const AuthenticatedApp = () => (
  <Wrapper>
    <Navigation />
    <App>
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
    </App>
  </Wrapper>
);

export default AuthenticatedApp;
