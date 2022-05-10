import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { getUser, getUserName } from '../db/users';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('There is no provider');

  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined);
  const [userName, setUserName] = useState(
    window.localStorage.getItem('userName')
  );
  const [userImage, setUserImage] = useState(
    window.localStorage.getItem('userImage')
  );

  const [userColor, setUserColor] = useState(
    window.localStorage.getItem('userColor')
  );

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
    const user = await getUser(email);
    console.log(user);
    setUserName(user.name);
    setUserImage(user.image);
    setUserColor(user.color);

    window.localStorage.setItem('userName', user.name);
    window.localStorage.setItem('userImage', user.image);
    window.localStorage.setItem('userColor', user.color);
  };

  const logout = () => signOut(auth);

  useEffect(() => {
    const userLogOut = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      window.localStorage.setItem('userLogged', currentUser);
    });

    return () => userLogOut();
  }, []);

  useEffect(() => {
    setUser(window.localStorage.getItem('userLogged'));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signUp,
        login,
        logout,
        user,
        userName,
        setUserName,
        userImage,
        setUserImage,
        userColor,
        setUserColor,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
