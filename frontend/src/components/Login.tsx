import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { AuthForm, AuthInput, AuthText, Header, MainButton, MainWrapper } from '.';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const { signIn, user, error, loading } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleLogin = async () => {
    await signIn(email, password);
  };

  return (
    <MainWrapper style={{ height: '100%', justifyContent: 'center' }}>
      <Header>Log In</Header>
      <AuthForm>
        <AuthInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <AuthInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <MainButton onClick={handleLogin} disabled={loading}>
          {loading ? 'Logging in...' : 'Log In'}
        </MainButton>
        {error && <AuthText style={{ color: 'red' }}>Error: {error}</AuthText>}
      </AuthForm>
      
      <AuthText>Don't have an account?</AuthText>
      <MainButton onClick={() => navigate('/signup')}>Sign Up</MainButton>
    </MainWrapper>
  );
};

export default Login;
