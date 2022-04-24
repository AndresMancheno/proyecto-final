import { useContext, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useUser } from 'reactfire';
import { UserContext } from '../../context/User/UserContext';
import { app } from '../../Firebase/firebase';

export default function Layout({ children }) {
	//const { user, setUser } = useContext(UserContext);

	// useEffect(() => {
	// 	if (user === null) {
	// 		history.push('/login');
	// 	} else {
	// 		app.auth().onAuthStateChanged((firebaseUser) => {
	// 			setUser(firebaseUser);
	// 			history.push('/');
	// 		});
	// 	}
	// }, [user]);

	// useEffect(() => {
	// 	app.auth().onAuthStateChanged((firebaseUser) => {});
	// }, []);
	const user = useUser();
	let history = useHistory();

	if (!user) {
		history.push('/login');
	} else {
		history.push('/');
	}
	return <>{children}</>;
}
