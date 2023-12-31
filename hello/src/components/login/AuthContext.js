import { useContext, createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from './Firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();


  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
  };

  const logOut = () => {
      signOut(auth)
      navigate('/');
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('User', currentUser)
      localStorage.setItem('dataKey', JSON.stringify(currentUser));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
}

export default UserAuth;