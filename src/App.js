import Home from './pages/home';
import Login from './components1/Login';
import React, { useEffect } from 'react';
import { app } from './Firebase/firebase';

export default function App() {
	const [usuario, setUsuario] = React.useState(null);
	// useEffect(() => {
	// 	app.auth().onAuthStateChanged((firebaseUser) => {
	// 		setUsuario(firebaseUser);
	// 	});
	// }, []);

	return usuario ? <Home /> : <Login setUsuario={setUsuario} />;
}
