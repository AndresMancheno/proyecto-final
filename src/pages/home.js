import { useNavigate } from 'react-router-dom';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { useAuth } from '../context/authContext';

export default function Home() {
	const { user, userName, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		await logout();
		navigate('/login');
	};

	return (
		<ProtectedRoute>
			<h1>Bienvenido {userName}</h1>

			<button onClick={handleLogout}>Cerrar sesión</button>
		</ProtectedRoute>
	);
}
