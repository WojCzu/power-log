import LoginForm from 'components/organisms/LoginForm/LoginForm';
import SignupForm from 'components/organisms/SignupForm/SignupForm';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Wrapper } from './UnauthenticatedApp.styles';
import routes from 'utils/routes';

const UnuthenticatedApp = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path={routes.login}>
          <LoginForm />
        </Route>
        <Route exact path={routes.signup}>
          <SignupForm />
        </Route>
        <Route path="/">
          <Redirect to={routes.login} />
        </Route>
      </Switch>
    </Wrapper>
  );
};

export default UnuthenticatedApp;
