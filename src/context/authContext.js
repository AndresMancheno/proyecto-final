import { createContext, useContext, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import { auth } from '../Firebase/firebase';
import { getUserName } from '../DB/users';

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

	const signUp = (email, password) =>
		createUserWithEmailAndPassword(auth, email, password);

	const login = async (email, password) => {
		signInWithEmailAndPassword(auth, email, password);
		setUserName(await getUserName(email));

		window.localStorage.setItem('userName', await getUserName(email));
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
		<AuthContext.Provider value={{ signUp, login, logout, user, userName }}>
			{children}
		</AuthContext.Provider>
	);
}
