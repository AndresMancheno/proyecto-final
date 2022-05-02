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
import { useForm } from 'react-hook-form';
import { async } from '@firebase/util';

export default function SignUp() {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();

	const { login } = useAuth();
	const navigate = useNavigate();

	const onSubmit = (values) => logUser(values);

	const logUser = async (values) => {
		try {
			await login(values.email, values.password);
			navigate('/');
		} catch (error) {
			console.log('error');
		}
	};

	return (
		<>
			<BackgroundColor>
				<Modal preventClose blur aria-labelledby="modal-title" open={true}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Modal.Header>
							<Text size={20}>
								Bienvenido a <Text b>RGL Notes</Text>
							</Text>
						</Modal.Header>

						<Modal.Body>
							<Input
								clearable
								underlined
								color="primary"
								fullWidth
								size="lg"
								type="email"
								placeholder="andres-iniesta@gmail.com"
								aria-label="email"
								contentLeft={<Mail fill="currentColor" />}
								{...register('email', {
									required: {
										value: 'true',
										message: 'Campo requerido',
									},
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: 'Introduce un formato válido',
									},
								})}
							/>
							{errors.email && (
								<MessageError>{errors.email.message}</MessageError>
							)}

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
								{...register('password', {
									required: {
										value: 'true',
										message: 'Campo requerido',
									},
									minLength: {
										value: 6,
										message: 'La contraseña debe tener al menos 6 carácteres',
									},
								})}
							/>
							{errors.password && (
								<MessageError>{errors.password.message}</MessageError>
							)}

							<Row justify="flex-end">
								<Link to="/signUp">
									<div as={NextLink}>Si no tienes cuenta, ¡Regístrate!</div>
								</Link>
							</Row>
						</Modal.Body>

						<Modal.Footer>
							<Button css={{ margin: '0 auto' }} type="submit">
								¡Bienvenido!
							</Button>
						</Modal.Footer>
					</form>
				</Modal>
			</BackgroundColor>
		</>
	);
}
