import React, { useState } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { StyledButton, StyledP, Wrapper } from './LoginForm.styles';
import { useFirestore } from 'hooks/useFirestore';
import { signInWithEmailAndPassword as loginUser } from 'firebase/auth';

const LoginForm = ({ setIsLogin }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { auth } = useFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(auth, login, password);
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <FormField
        label="login"
        id="login"
        name="login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        isColumn
        required
      />
      <FormField
        label="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        isColumn
        type="password"
        required
      />
      <Button isPrimary>Log In</Button>
      <StyledP>
        Not a member?
        <StyledButton type="button" onClick={() => setIsLogin(false)}>
          Signup now!
        </StyledButton>
      </StyledP>
    </Wrapper>
  );
};

export default LoginForm;
