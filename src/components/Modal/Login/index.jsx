import {
  Modal,
  Input,
  Row,
  Button,
  Text,
  Link as NextLink,
  useTheme,
} from '@nextui-org/react';

import { Link } from 'react-router-dom';

import { useAuth } from 'context/authContext';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { MessageError, StyledModal } from './styled';
import { useState } from 'react';

export default function ModalLogin() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { isDark } = useTheme();
  const { login } = useAuth();
  const navigate = useNavigate();

  const [errorInLogging, setErrorInLogging] = useState(false);

  const onSubmit = (values) => logUser(values);

  const logUser = async (values) => {
    try {
      await login(values.email, values.password);
      setErrorInLogging(false);
      navigate('/');
    } catch (error) {
      setErrorInLogging(true);
    }
  };

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
              Bienvenido a <Text b>RGL Notes</Text>
            </Text>
          </Modal.Header>

          <Modal.Body>
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

            {errorInLogging === true && (
              <MessageError>Usuario no registrado</MessageError>
            )}

            <Row justify="flex-end">
              <Link to="/signUp">
                <div as={NextLink}>Si no tienes cuenta, ¡Regístrate!</div>
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
              ¡Bienvenido!
            </Button>
          </Modal.Footer>
        </form>
      </StyledModal>
    </>
  );
}
