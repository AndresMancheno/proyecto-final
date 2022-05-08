import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { auth } from '../Firebase/firebase';
import { getUserName } from '../DB/users';
import { getUserSections } from '../DB/sections';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('There is no provider');

  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined);
  const [userEmail, setUserEmail] = useState(
    window.localStorage.getItem('userEmail')
  );
  const [userName, setUserName] = useState(
    window.localStorage.getItem('userName')
  );
  const [userSections, setUserSections] = useState(getUserSections(userEmail));

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
    const allUserSections = getUserSections(email);
    window.localStorage.setItem('userEmail', email);
    window.localStorage.setItem('userName', await getUserName(email));
    setUserSections(allUserSections);

    setUserEmail(email);
    setUserName(await getUserName(email));
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
        userEmail,
        userName,
        setUserName,
        userSections,
        setUserSections,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
