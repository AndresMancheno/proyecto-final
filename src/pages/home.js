import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

export default function Home() {
	const { userName, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		await logout();
		navigate('/login');
	};

	return (
		<>
			<h1>Bienvenido {userName}</h1>

			<button onClick={handleLogout}>Cerrar sesión</button>
		</>
	);
}
