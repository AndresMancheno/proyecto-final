import Home from './pages/home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/login';
import SignUpPage from './pages/signUp';
import { AuthProvider } from './context/authContext';
import { ProtectedRoute } from './components/ProtectedRoute';

export default function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signUp" element={<SignUpPage />} />
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	);
}
