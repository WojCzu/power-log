import { Button } from 'components/atoms/Button/Button';
import LoginForm from 'components/organisms/LoginForm/LoginForm';
import SignupForm from 'components/organisms/SignupForm/SignupForm';
import React, { useState } from 'react';
import { Wrapper, Card, Title } from './UnuthenticatedApp.styles';

const UnuthenticatedApp = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Wrapper>
      <Card>
        <Title>{isLogin ? 'Login Form' : 'Signup Form'}</Title>
        <div>
          <Button onClick={() => setIsLogin(true)}>Login</Button>{' '}
          <Button onClick={() => setIsLogin(false)}>Signup</Button>
        </div>
        {isLogin ? <LoginForm setIsLogin={setIsLogin} /> : <SignupForm />}
      </Card>
    </Wrapper>
  );
};

export default UnuthenticatedApp;
