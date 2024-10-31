// src/components/Signup.tsx
import React, { useState } from 'react';
import { z } from 'zod';
import { authSchema } from '../validation/authSchema';
import { useAuthContext } from '../context/AuthContext';
import { AuthForm, AuthInput, AuthText, Header, MainButton, MainWrapper } from '.';
import { useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
  const { signUp, error, loading } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      // Validate email and password
      authSchema.parse({ email, password });
      setValidationError(null);
      
      // Proceed with signup
      const success = await signUp(email, password);
      if (success) {
        navigate('/login');
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        setValidationError(err.errors.map(e => e.message).join(", "));
      }
    }
  };

  return (
    <MainWrapper style={{ height: '100%', justifyContent: 'center' }}>
      <Header>Sign Up</Header>
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
        <MainButton onClick={handleSignup} disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </MainButton>
        {validationError && <AuthText style={{ color: 'red' }}>{validationError}</AuthText>}
        {error && <AuthText style={{ color: 'red' }}>Error: {error}</AuthText>}
      </AuthForm>

      <AuthText>Already have an account?</AuthText>
      <MainButton onClick={() => navigate('/login')}>Log In</MainButton>
    </MainWrapper>
  );
};

export default Signup;
