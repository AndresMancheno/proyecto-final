import { Modal, Input, Row, Button, Text, Link } from '@nextui-org/react';
import { useEffect } from 'react';
import { Hide } from '../../icons/Hide';
import { Mail } from '../../icons/Mail';
import { Password } from '../../icons/Password';
import { Show } from '../../icons/Show';
import { BackgroundColor } from './styled';

export default function Login() {
	/* 	useEffect({}, []);
	 */
	return (
		<>
			<BackgroundColor>
				<Modal preventClose blur aria-labelledby="modal-title" open={true}>
					<Modal.Header>
						<Text size={20}>
							Bienvenido a <Text b>RGL Notes</Text>
						</Text>
					</Modal.Header>
					<Modal.Body>
						<Input
							clearable
							underlined
							fullWidth
							color="primary"
							size="lg"
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
							contentLeft={<Password fill="currentColor" />}
							visibleIcon={<Show fill="currentColor" />}
							hiddenIcon={<Hide fill="currentColor" />}
						/>
						<Row justify="flex-end">
							<Link href="/signUp" underline icon>
								Si no tienes cuenta, ¡Regístrate!
							</Link>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<Button css={{ margin: '0 auto' }}>Iniciar sesión</Button>
					</Modal.Footer>
				</Modal>
			</BackgroundColor>
		</>
	);
}
