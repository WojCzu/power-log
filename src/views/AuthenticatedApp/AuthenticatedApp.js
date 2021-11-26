import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from 'components/organisms/Navigation/Navigation';
import Workouts from 'views/Workouts/Workouts';
import AddWorkout from 'views/AddWorkout/AddWorkout';
import { Wrapper, App } from './AuthenticatedApp.js.styles';
import routes from 'utils/routes';

const AuthenticatedApp = () => (
  <Wrapper>
    <Navigation />
    <App>
      <Switch>
        <Route exact path={routes.workoutList}>
          <Workouts />
        </Route>
        <Route exact path={routes.addWorkout}>
          <AddWorkout />
        </Route>
        <Route path="/">
          <Redirect to={routes.workoutList} />
        </Route>
      </Switch>
    </App>
  </Wrapper>
);

export default AuthenticatedApp;
