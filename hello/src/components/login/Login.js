
import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import UserAuth  from '../login/AuthContext';
import { useNavigate } from 'react-router-dom';

import orderService from '../../service/order.service';
import './style.css';


const Login = ({ setIsLoggedIn }) => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
      localStorage.setItem('dataKey', JSON.stringify(user));
      console.log(JSON.stringify(user));
  }, [user]);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      setIsLoggedIn(true); // Update the isLoggedIn state
      localStorage.setItem('isLoggedIn', 'true');
      
      
    navigate('/home');
      
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
    
    <div class="center-content">
      <div class="board">
        <div>
          <h1 class="text-center text-3x2 font-bold py-8" >Login</h1>
          <p></p>
          <form>
            <div>
              <div className="form-group">
                <label>UserName</label>
                <input type="text" name="username" className="form-control"/>
              </div>    
              <div className="form-group">
                <label>Email</label>
                <input type="text" name="email" className="form-control"  />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
          <p class="text-center">Or</p>
          <div><GoogleButton onClick={handleGoogleSignIn} /></div>
        </div>

      </div>
    </div>
  );
};

export default Login;