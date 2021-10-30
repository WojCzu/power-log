import LoginForm from 'components/organisms/LoginForm/LoginForm';
import SignupForm from 'components/organisms/SignupForm/SignupForm';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Wrapper } from './UnauthenticatedApp.styles';

const UnuthenticatedApp = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/signup">
          <SignupForm />
        </Route>
        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Wrapper>
  );
};

export default UnuthenticatedApp;
