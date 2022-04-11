import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import Home from './pages/home';
import LoginPage from './pages/login';
import SignUp from './pages/signUp';

export default function App() {
	return (
		<Router>
			<NextUIProvider>
				<Switch>
					<Route path="/signUp">
						<SignUp />
					</Route>
					<Route path="/login">
						<LoginPage />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</NextUIProvider>
		</Router>
	);
}
