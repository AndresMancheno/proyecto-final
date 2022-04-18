import Home from './pages/home';
import Login from './components/Login/login';
import React from 'react';

export default function App() {
	const [usuario, setUsuario] = React.useState(null);

	return usuario ? <Home /> : <Login setUsuario={setUsuario} />;
}
