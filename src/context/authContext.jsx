import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { auth } from 'lib/firebase/firebase';
import { getUser } from 'db/users';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('There is no provider');

  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined);

  const [userConf, setUserConf] = useState({
    email: window.localStorage.getItem('userEmail'),
    name: window.localStorage.getItem('userName'),
    color: window.localStorage.getItem('userColor'),
    image: window.localStorage.getItem('userImage'),
  });

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
    const userConfiguaration = await getUser(email);

    setUserConf(() => ({
      email: email,
      name: userConfiguaration.name,
      color: userConfiguaration.color,
      image: userConfiguaration.image,
    }));

    window.localStorage.setItem('userEmail', email);
    window.localStorage.setItem('userName', userConf.name);
    window.localStorage.setItem('userColor', userConf.color);
    window.localStorage.setItem('userImage', userConf.image);
  };

  const logout = () => signOut(auth);

  useEffect(() => {
    const userLogOut = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      window.localStorage.setItem('userLogged', user);
    });

    return () => userLogOut();
  }, []);

  useEffect(() => {
    setUser(window.localStorage.getItem('userLogged'));

    setUserConf(() => ({
      email: window.localStorage.getItem('userEmail'),
      name: window.localStorage.getItem('userName'),
      color: window.localStorage.getItem('userColor'),
      image: window.localStorage.getItem('userImage'),
    }));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signUp,
        login,
        logout,
        user,
        userConf,
        setUserConf,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
