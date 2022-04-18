import {
	Modal,
	Input,
	Row,
	Button,
	Text,
	Link as NextLink,
} from '@nextui-org/react';

import { Link } from 'react-router-dom';
import { Hide } from '../../icons/Hide';
import { Mail } from '../../icons/Mail';
import { Password } from '../../icons/Password';
import { Show } from '../../icons/Show';
import { BackgroundColor, CenterButton } from './styled';
import React from 'react';
import { app } from '../../Firebase/firebase';

export default function Login(props) {
	const [isRegistrado, setIsRegistrado] = React.useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		let email = document.getElementById('userEmail').value;
		let password = document.getElementById('userPassword').value;

		if (isRegistrado) {
			app
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then((firebaseUser) => {
					console.log('usuarioCreado:' + firebaseUser);
					props.setUsuario(firebaseUser);
				});
		} else {
			app
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then((firebaseUser) => {
					console.log('usuariologueado:' + firebaseUser);
					props.setUsuario(firebaseUser);
				});
		}
	};
	return (
		<>
			<BackgroundColor>
				<Modal preventClose blur aria-labelledby="modal-title" open={true}>
					<Modal.Header>
						<Text size={20}>
							{isRegistrado ? 'Regístrate en' : 'Bienvenido a'}{' '}
							<Text b>RGL Notes</Text>
						</Text>
					</Modal.Header>
					<Modal.Body>
						<Input
							clearable
							underlined
							fullWidth
							color="primary"
							size="lg"
							id="userEmail"
							placeholder="Correo electrónico"
							contentLeft={<Mail fill="currentColor" />}
						/>

						<Input.Password
							clearable
							underlined
							fullWidth
							color="primary"
							size="lg"
							placeholder="Contraseña"
							id="userPassword"
							contentLeft={<Password fill="currentColor" />}
							visibleIcon={<Show fill="currentColor" />}
							hiddenIcon={<Hide fill="currentColor" />}
						/>

						<Row justify="flex-end">
							<NextLink
								underline
								icon
								onClick={() => setIsRegistrado(!isRegistrado)}
							>
								{isRegistrado ? 'Volver al login' : '¿No estás registrado?'}
							</NextLink>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<Button css={{ margin: '0 auto' }} onClick={handleSubmit}>
							{isRegistrado ? '¡Regístrate!' : 'Inicia sesión'}
						</Button>
					</Modal.Footer>
				</Modal>
			</BackgroundColor>
		</>
	);
}
