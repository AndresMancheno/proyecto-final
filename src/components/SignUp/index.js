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
import { addUsers } from '../../DB/users';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function SignUp() {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();

	const { signUp } = useAuth();
	const navigate = useNavigate();

	const onSubmit = (values) => signUpUser(values);

	const signUpUser = async (values) => {
		try {
			await signUp(values.email, values.password);

			try {
				addUsers(values.userName, values.email);
				navigate('/login');
			} catch (error) {
				//
			}
		} catch (error) {
			//
		}
	};

	return (
		<>
			<BackgroundColor>
				<Modal preventClose blur aria-labelledby="modal-title" open={true}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Modal.Header>
							<Text size={20}>
								Regístrate en <Text b>RGL Notes</Text>
							</Text>
						</Modal.Header>

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
								{...register('userName', {
									required: {
										value: 'true',
										message: 'Campo requerido',
									},
								})}
							/>
							{errors.userName && (
								<MessageError>{errors.userName.message}</MessageError>
							)}

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
								<Link to="/login">
									<div as={NextLink}>Volver al login</div>
								</Link>
							</Row>
						</Modal.Body>

						<Modal.Footer>
							<Button css={{ margin: '0 auto' }} type="submit">
								¡Regístrate!
							</Button>
						</Modal.Footer>
					</form>
				</Modal>
			</BackgroundColor>
		</>
	);
}
