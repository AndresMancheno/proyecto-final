import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export function Layout({ children }) {
	const location = useLocation();
	const history = useHistory();
	useEffect(() => {
		const user = localStorage.getItem('session');
		if (!user) history.push('/login');
	}, [location]);
	return <>{children}</>;
}
