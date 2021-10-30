import { Button } from 'components/atoms/Button/Button';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import FormField from 'components/molecules/FormField/FormField';
import { useFirestore } from 'hooks/useFirestore';
import React, { useState } from 'react';
import { Wrapper, Card, Title } from './SignupForm.styles';
import { createUserWithEmailAndPassword as createUser } from 'firebase/auth';
import LoginNav from 'components/molecules/LoginNav/LoginNav';

const SignupForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const { auth, addUser } = useFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (password.length < 6) {
      setErrorMessage('password must be at least 6 characters long');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('password and confirmation password must be the same');
      return;
    }

    setIsButtonDisabled(true);
    createUser(auth, login, password)
      .then((credential) => {
        addUser(credential.user.uid);
      })
      .catch((e) => {
        setErrorMessage(e.message);
        setIsButtonDisabled(false);
      });
  };

  return (
    <Card>
      <Title>Signup Form</Title>
      <LoginNav />
      <Wrapper onSubmit={handleSubmit}>
        <FormField
          label="email"
          id="email"
          name="email"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          isColumn
          type="email"
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
        <FormField
          label="confirm password"
          id="confirm-password"
          name="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          isColumn
          type="password"
          required
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Button $isPrimary disabled={isButtonDisabled}>
          Sign Up!
        </Button>
      </Wrapper>
    </Card>
  );
};

export default SignupForm;
