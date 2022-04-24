import Home from './pages/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import { UserProvider } from './context/User/UserContext';

export default function App() {
	return (
		<Router>
			<Switch>
				<UserProvider>
					<Route path="/login" component={LoginPage} />
					<Route path="/" component={Home} />
				</UserProvider>
			</Switch>
		</Router>
	);
	//	return usuario ? <Home /> : <Login setUsuario={setUsuario} />;
}
