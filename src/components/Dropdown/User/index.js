import { Button, Input, Modal, Text } from '@nextui-org/react';
import { Root } from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/authContext';
import { changeUserName } from '../../../DB/users';
import { motion } from 'framer-motion';

import IconUser from '../../Avatar';
import {
  DropdownContent,
  DropdownItem,
  MessageError,
  UserNameContainer,
} from './styled';

export default function DropdownUser() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { logout, user, setUserName } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const [open, setOpen] = useState(false);

  const onSubmit = (values) => changeName(values);

  const changeName = async (value) => {
    try {
      await changeUserName(value.name, user.email);
      window.localStorage.setItem('userName', value.name);
      setUserName(value.name);
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
            Cambiar el nombre
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
              Cambia tú{' '}
              <Text b size={18}>
                nombre
              </Text>
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Nombre de usuario"
              name="name"
              {...register('name', {
                required: {
                  value: 'true',
                  message: 'Campo requerido',
                },
                minLength: {
                  value: 1,
                  message: 'Campo requerido',
                },
              })}
            />

            {errors.userName && (
              <MessageError>{errors.userName.message}</MessageError>
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
