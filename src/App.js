import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import Home from './pages/home';
import Login from './pages/login';

export default function App() {
	return (
		<Router>
			<NextUIProvider>
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</NextUIProvider>
		</Router>
	);
}
