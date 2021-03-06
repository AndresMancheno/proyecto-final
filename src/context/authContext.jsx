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
  const [lists, setLists] = useState([]);
  const [weekTasks, setWeekTasks] = useState([]);
  const [tags, setTags] = useState([]);

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
    await signInWithEmailAndPassword(auth, email, password);

    const userConfiguration = await getUser(email);

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

  const updateLists = (lists) => {
    setLists(lists);
  };

  const updateTags = (tags) => {
    setTags(tags);
  };

  const updateWeekTasks = (tasks) => {
    setWeekTasks(tasks);
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
        setUserConf,
        updateLists,
        updateTags,
        updateWeekTasks,
        user,
        userConf,
        lists,
        tags,
        weekTasks,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
