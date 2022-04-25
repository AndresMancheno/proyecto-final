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
import { User } from '../../icons/User';

import { Link } from 'react-router-dom';

import { BackgroundColor, MessageError } from './styled';

import { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { addUsers } from '../../DB/addUsers';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
	const [user, setUser] = useState({
		userName: '',
		email: '',
		password: '',
	});

	const { signUp } = useAuth();
	const navigate = useNavigate();

	const [error, setError] = useState();

	const handlerChange = ({ target: { name, value } }) => {
		setUser({ ...user, [name]: value });
	};

	const handlerSubmit = async (e) => {
		e.preventDefault();
		setError('');

		try {
			await signUp(user.email, user.password);

			try {
				addUsers(user.userName, user.email);
				navigate('/login');
			} catch (error) {
				setError('Ha habido un problema en el registro :(');
			}
		} catch (error) {
			setError('Ha habido un problema en el registro :(');
		}
	};

	return (
		<>
			<BackgroundColor>
				<Modal preventClose blur aria-labelledby="modal-title" open={true}>
					<Modal.Header>
						<Text size={20}>
							Regístrate en <Text b>RGL Notes</Text>
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
							type="userName"
							name="userName"
							placeholder="Andrés Iniesta"
							aria-label="User Name"
							contentLeft={<User fill="currentColor" />}
							onChange={handlerChange}
						/>

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
							<Link to="/login">
								<div as={NextLink}>Volver al login</div>
							</Link>
						</Row>
					</Modal.Body>

					<Modal.Footer>
						<Button css={{ margin: '0 auto' }} onClick={handlerSubmit}>
							¡Regístrate!
						</Button>
					</Modal.Footer>
				</Modal>
			</BackgroundColor>
		</>
	);
}
