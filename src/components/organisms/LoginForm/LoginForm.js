import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components/atoms/Button/Button';
import { StyledLink } from 'components/atoms/StyledLink/StyledLink';
import FormField from 'components/molecules/FormField/FormField';
import LoginNav from 'components/molecules/LoginNav/LoginNav';
import { StyledP, Wrapper, Title, Card } from './LoginForm.styles';
import { useFirestore } from 'hooks/useFirestore';
import { signInWithEmailAndPassword as loginUser } from 'firebase/auth';
import routes from 'utils/routes';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';

const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { auth } = useFirestore();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      await loginUser(auth, login, password);
    } catch (e) {
      setErrorMessage('wrong login or password');
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <Title>Login Form</Title>
      <LoginNav />
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
        <Button $isPrimary disabled={isLoading}>
          Log In
        </Button>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <StyledP>
          Not a member?
          <StyledLink as={Link} to={routes.signup}>
            Signup now!
          </StyledLink>
        </StyledP>
      </Wrapper>
    </Card>
  );
};

export default LoginForm;
