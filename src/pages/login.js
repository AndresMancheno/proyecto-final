import { Button } from '@nextui-org/react';
import { useHistory } from 'react-router-dom';

export default function Login() {
	const history = useHistory();
	return (
		<>
			<Button
				color={'gradient'}
				onClick={() => {
					localStorage.setItem('session', '1');
					history.push('/');
				}}
			>
				Login
			</Button>
		</>
	);
}
