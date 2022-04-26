import { useAuth } from '../../context/authContext';
import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ children }) {
	const { user, setUser } = useAuth();

	if (user === undefined) return null;

	if (user === null) return <Navigate to={'/login'} />;

	return <>{children}</>;
}
