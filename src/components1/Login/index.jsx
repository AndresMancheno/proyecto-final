import { Modal, Input, Row, Button, Text, Link } from '@nextui-org/react';

import { Hide } from '../../icons/Hide';
import { Mail } from '../../icons/Mail';
import { Password } from '../../icons/Password';
import { Show } from '../../icons/Show';

import { BackgroundColor, MessageError } from './styled';

import React from 'react';
import { app } from '../../Firebase/firebase';
import { useForm } from 'react-hook-form';

export default function Login({ setUsuario }) {
	const [isRegistered, setIsRegistered] = React.useState(false);
	const [userNotFound, setNotFound] = React.useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const submitForm = () => {
		let email = document.getElementById('userEmail').value;
		let password = document.getElementById('userPassword').value;

		if (isRegistered) {
			app
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then((firebaseUser) => {
					setUsuario(firebaseUser);
				});
		} else {
			app
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then((firebaseUser) => {
					setUsuario(firebaseUser);
				})
				.catch(() => {
					setNotFound(!userNotFound);
				});
		}
	};

	return (
		<>
			<BackgroundColor>
				<Modal preventClose blur aria-labelledby="modal-title" open={true}>
					<Modal.Header>
						<Text size={20}>
							{isRegistered ? 'Regístrate en' : 'Bienvenido a'}{' '}
							<Text b>RGL Notes</Text>
						</Text>
					</Modal.Header>
					<Modal.Body>
						{!!userNotFound && (
							<MessageError>
								No existe ningún usuario con estos datos
							</MessageError>
						)}
						<Input
							clearable
							underlined
							fullWidth
							type="email"
							name="email"
							size="lg"
							id="userEmail"
							color={errors.email ? 'error' : 'primary'}
							placeholder="Correo electrónico"
							contentLeft={<Mail fill="currentColor" />}
							{...register('email', {
								required: {
									value: true,
								},
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
									message: 'Introduce un email válido',
								},
							})}
						/>
						{errors.email && (
							<MessageError>{errors.email.message}</MessageError>
						)}
						<Input.Password
							clearable
							underlined
							fullWidth
							size="lg"
							placeholder="Contraseña"
							color={errors.password ? 'error' : 'primary'}
							id="userPassword"
							type="password"
							name="password"
							contentLeft={<Password fill="currentColor" />}
							visibleIcon={<Show fill="currentColor" />}
							hiddenIcon={<Hide fill="currentColor" />}
							{...register('password', {
								required: {
									value: true,
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
							<Link
								underline
								icon
								onClick={() => setIsRegistered(!isRegistered)}
							>
								{isRegistered ? 'Volver al login' : '¿No estás registrado?'}
							</Link>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<Button
							css={{ margin: '0 auto' }}
							onClick={handleSubmit(submitForm)}
						>
							{isRegistered ? '¡Regístrate!' : 'Inicia sesión'}
						</Button>
					</Modal.Footer>
				</Modal>
			</BackgroundColor>
		</>
	);
}
