import { Modal, Input, Row, Button, Text, Link } from '@nextui-org/react';
import { Hide } from '../../icons/Hide';
import { Mail } from '../../icons/Mail';
import { Password } from '../../icons/Password';
import { Show } from '../../icons/Show';
import { User } from '../../icons/User';
import { BackgroundColor } from './styled';

export default function SignUp() {
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
							placeholder="Nombre de usuario"
							contentLeft={<User fill="currentColor" />}
						/>

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
					</Modal.Body>
					<Modal.Footer>
						<Button css={{ margin: '0 auto' }}>¡Regístrate!</Button>
					</Modal.Footer>
				</Modal>
			</BackgroundColor>
		</>
	);
}
