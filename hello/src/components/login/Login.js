
import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import UserAuth  from '../login/AuthContext';
import { useNavigate } from 'react-router-dom';
import './style.css';
const Login = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/login');
    }
  }, [user]);

  return (
    <div>
      <div className='max-w-[240px] m-auto py-4'>
        <div className='google-button'>
        <h1 className='text-center text-3xl font-bold py-8'>Login</h1>
        <GoogleButton onClick={handleGoogleSignIn} />
        </div>
      </div>
    </div>
  );
};

export default Login;