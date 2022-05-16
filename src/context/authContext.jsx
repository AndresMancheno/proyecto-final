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
  const [sections, setSections] = useState([]);
  const [lists, setLists] = useState([]);
  const [tasks, setTasks] = useState([]);

  //useReducer
  const [userConf, setUserConf] = useState({
    email: window.localStorage.getItem('userEmail'),
    name: window.localStorage.getItem('userName'),
    color: window.localStorage.getItem('userColor'),
    image: window.localStorage.getItem('userImage'),
  });

  const signUp = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email, password) => {
    const {
      user: { email: emailLogged },
    } = await signInWithEmailAndPassword(auth, email, password);
    const userConfiguration = await getUser(emailLogged);

    setUserConf(() => ({
      email: email,
      name: userConfiguration.name,
      color: userConfiguration.color,
      image: userConfiguration.image,
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
        sections,
        setSections,
        lists,
        setLists,
        tasks,
        setTasks,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
