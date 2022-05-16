import {
  Modal,
  Input,
  Row,
  Button,
  Text,
  Link as NextLink,
  useTheme,
} from '@nextui-org/react';

import { Hide } from 'icons/Hide';
import { Mail } from 'icons/Mail';
import { Password } from 'icons/Password';
import { Show } from 'icons/Show';
import { User } from 'icons/User';

import { Link } from 'react-router-dom';

import { MessageError, StyledModal } from './styled';

import { useAuth } from 'context/authContext';
import { addUsers } from 'db/users';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function ModalSignUp() {
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
        await addUsers(values.userName, values.email);
        navigate('/login');
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const { isDark } = useTheme();

  return (
    <>
      <StyledModal
        preventClose
        blur
        aria-labelledby="modal-title"
        open={true}
        isDark={isDark}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header>
            <Text size={20}>
              Regístrate en <Text b>RGL Notes</Text>
            </Text>
          </Modal.Header>

          <Modal.Body>
            <Input
              underlined
              labelLeft="Nombre"
              placeholder="RGL Notes"
              type="userName"
              name="userName"
              aria-label="userName"
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
              underlined
              labelLeft="Correo"
              placeholder="rgl-notes@gmail.com"
              type="email"
              name="email"
              aria-label="email"
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
              underlined
              labelLeft="Contraseña"
              placeholder="rglnotes (6 carácteres mínimo)"
              type="password"
              name="password"
              aria-label="email"
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
            <Button
              css={{
                margin: '0 auto',
                background: '#1A5D75',
                color: 'white',
              }}
              type="submit"
            >
              ¡Regístrate!
            </Button>
          </Modal.Footer>
        </form>
      </StyledModal>
    </>
  );
}
