import { Button, Modal, Text } from '@nextui-org/react';
import { Root } from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/authContext';
import { changeProfile } from '../../../DB/users';
import { motion } from 'framer-motion';

import IconUser from '../../Avatar';
import {
  DropdownContent,
  DropdownItem,
  MessageError,
  StyledInput,
  StyledOption,
  StyledSelect,
  UserNameContainer,
} from './styled';

export default function DropdownUser() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const {
    logout,
    user,
    setUserName,
    setUserImage,
    setUserColor,
    userName,
    userColor,
  } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const [open, setOpen] = useState(false);

  const onSubmit = (values) => checkValues(values);

  const checkValues = (values) => {
    const userValues = {
      name: '',
      image: '',
      color: '',
    };

    if (values.name === undefined) {
      userValues.name = userName;
    } else {
      userValues.name = values.name;
    }

    userValues.image = values.image;

    userValues.color = values.color;

    changeValues(userValues);
  };

  const changeValues = async (value) => {
    try {
      await changeProfile(value, user.email);
      window.localStorage.setItem('userName', value.name);
      window.localStorage.setItem('userImage', value.image);
      window.localStorage.setItem('userColor', value.color);
      setUserName(value.name);
      setUserImage(value.image);
      setUserColor(value.color);
      setOpen(false);
    } catch (ev) {
      //
    }
  };

  return (
    <Root>
      <UserNameContainer asChild>
        <div aria-label="Customise options">
          <IconUser />
        </div>
      </UserNameContainer>

      <DropdownContent sideOffset={5}>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <DropdownItem onClick={() => setOpen(true)}>
            Editar perfil
          </DropdownItem>
          <DropdownItem onClick={() => handleLogout()}>
            Cerrar sesión
          </DropdownItem>
        </motion.div>
      </DropdownContent>

      <Modal
        open={open}
        closeButton
        aria-labelledby="modal-title"
        onClose={() => setOpen(false)}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header>
            <Text id="modal-title" size={18}>
              Edita tú{' '}
              <Text b size={18}>
                perfil
              </Text>
            </Text>
          </Modal.Header>
          <Modal.Body>
            <StyledInput
              placeholder="Nombre de usuario"
              name="name"
              defaultValue={userName}
              {...register('name', {
                required: {
                  value: 'true',
                  message: 'Campo requerido',
                },
                minLength: {
                  value: 1,
                  message: 'El nombre debe tener al menos 6 carácteres',
                },
              })}
            />
            {errors.name && <MessageError>{errors.name.message}</MessageError>}
            <StyledInput
              placeholder="Enlace de la imágen"
              name="image"
              {...register('image')}
            />

            <StyledSelect
              defaultValue={userColor}
              name="color"
              {...register('color', {
                required: {
                  value: 'true',
                  message: 'Campo requerido',
                },
                minLength: {
                  value: 1,
                  message: 'La contraseña debe tener al menos 6 carácteres',
                },
              })}
            >
              <StyledOption
                value=""
                style={{
                  fontWeight: 'bold',
                }}
              >
                Elige un color
              </StyledOption>

              <StyledOption
                value="primary"
                style={{
                  color: '#0070F3',
                }}
              >
                ¡Azul!
              </StyledOption>
              <StyledOption
                value="secondary"
                style={{
                  color: '#7928ca',
                }}
              >
                ¡Morado!
              </StyledOption>
              <StyledOption
                value="success"
                style={{
                  color: '#17c964',
                }}
              >
                ¡Verde!
              </StyledOption>
              <StyledOption
                value="warning"
                style={{
                  color: '#f5a623',
                }}
              >
                ¡Amarillo!
              </StyledOption>
              <StyledOption
                value="error"
                style={{
                  color: '#f21361',
                }}
              >
                ¡Rojo!
              </StyledOption>
            </StyledSelect>
            {errors.color && (
              <MessageError>{errors.color.message}</MessageError>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button auto type="submit" css={{ margin: '0 auto' }}>
              ¡Cámbialo!
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </Root>
  );
}
