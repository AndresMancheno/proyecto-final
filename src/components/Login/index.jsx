import {
	Modal,
	Input,
	Row,
	Button,
	Text,
	Link as NextLink,
} from '@nextui-org/react';

import { Hide } from '../../icons/Hide';
import { Mail } from '../../icons/Mail';
import { Password } from '../../icons/Password';
import { Show } from '../../icons/Show';

import { Link } from 'react-router-dom';

import { BackgroundColor, MessageError } from './styled';

import { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const { login } = useAuth();
	const navigate = useNavigate();

	const [error, setError] = useState();

	const handlerChange = ({ target: { name, value } }) => {
		setUser({ ...user, [name]: value });
	};

	const handlerSubmit = async (e) => {
		e.preventDefault();
		setError('');

		try {
			await login(user.email, user.password);
			navigate('/');
		} catch (error) {
			setError('El usuario no existe :(');
		}
	};

	return (
		<>
			<BackgroundColor>
				<Modal preventClose blur aria-labelledby="modal-title" open={true}>
					<Modal.Header>
						<Text size={20}>
							Bienvenido a <Text b>RGL Notes</Text>
						</Text>
					</Modal.Header>

					{error && <MessageError>{error}</MessageError>}
					<Modal.Body>
						<Input
							clearable
							underlined
							color="primary"
							fullWidth
							size="lg"
							type="email"
							name="email"
							placeholder="andres-iniesta@gmail.com"
							aria-label="Email"
							contentLeft={<Mail fill="currentColor" />}
							onChange={handlerChange}
						/>

						<Input.Password
							clearable
							underlined
							color="primary"
							fullWidth
							size="lg"
							type="password"
							name="password"
							placeholder="andresito (6 carácteres mínimo)"
							aria-label="Password"
							contentLeft={<Password fill="currentColor" />}
							visibleIcon={<Show fill="currentColor" />}
							hiddenIcon={<Hide fill="currentColor" />}
							onChange={handlerChange}
						/>

						<Row justify="flex-end">
							<Link to="/signUp">
								<div as={NextLink}>Si no tienes cuenta, ¡Regístrate!</div>
							</Link>
						</Row>
					</Modal.Body>

					<Modal.Footer>
						<Button css={{ margin: '0 auto' }} onClick={handlerSubmit}>
							¡Bienvenido!
						</Button>
					</Modal.Footer>
				</Modal>
			</BackgroundColor>
		</>
	);
}
