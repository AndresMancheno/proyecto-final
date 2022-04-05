import { Modal, Input, Row, Button, Text, Link } from '@nextui-org/react';
import { Hide } from '../../icons/Hide';
import { Mail } from '../../icons/Mail';
import { Password } from '../../icons/Password';
import { Show } from '../../icons/Show';

export default function Login() {
	return (
		<>
			<Modal preventClose blur aria-labelledby="modal-title" open={true}>
				<Modal.Header>
					<Text id="modal-title" size={20}>
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
							Registrarse
						</Link>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<Button shadow color="gradient" css={{ margin: '0 auto' }}>
						Iniciar sesión
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
