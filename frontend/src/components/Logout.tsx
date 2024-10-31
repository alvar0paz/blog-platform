import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import { MainButton } from '.';

const Logout: React.FC = () => {
  const { signOut } = useAuthContext();

  return (
    <MainButton onClick={signOut} style={{ margin: '4rem 0' }}>Log Out</MainButton>
  );
};

export default Logout;
