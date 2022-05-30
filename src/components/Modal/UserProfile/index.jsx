import { Modal, Button, Text, useTheme } from '@nextui-org/react';
import { useAuth } from 'context/authContext';
import { changeProfile } from 'db/users';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {
  InputColor,
  InputColorContainer,
  MessageError,
  StyledInput,
  StyledModal,
} from './styled';

export default function UserProfile({ open, setOpen }) {
  const { userConf, setUserConf } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => checkValues(values);

  const checkValues = (values) => {
    const userValues = {
      name: '',
      image: '',
      color: '',
    };

    if (values.name === undefined) {
      userValues.name = userConf.name;
    } else {
      userValues.name = values.name;
    }

    if (values.name === undefined) {
      userValues.color = userConf.color;
    } else {
      userValues.color = values.color;
    }

    userValues.image = values.image;

    changeValues(userValues);
  };

  const changeValues = async (value) => {
    try {
      await changeProfile(value, userConf.email);
      window.localStorage.setItem('userName', value.name);
      window.localStorage.setItem('userImage', value.image);
      window.localStorage.setItem('userColor', value.color);

      setUserConf((prevValues) => ({
        ...prevValues,
        name: value.name,
        color: value.color,
        image: value.image,
      }));

      setOpen(false);

      if (isDark) {
        toast.success('Perfil actualizado', {
          style: { color: '#fff', background: '#333' },
        });
      } else {
        toast.success('Perfil actualizado');
      }
    } catch (ev) {
      if (isDark) {
        toast.success('Ha habido un problema al actualizar tú perfil', {
          style: { color: '#fff', background: '#333' },
        });
      } else {
        toast.success('Ha habido un problema al actualizar tú perfil');
      }
    }
  };
  const { isDark } = useTheme();

  return (
    <StyledModal
      open={open}
      closeButton
      aria-labelledby="modal-title"
      onClose={() => setOpen(false)}
      isDark={isDark}
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
            defaultValue={userConf.name}
            {...register('name', {
              required: {
                value: 'true',
                message: 'Campo requerido',
              },
            })}
          />
          {errors.name && <MessageError>{errors.name.message}</MessageError>}

          <StyledInput
            placeholder="Enlace de la imágen"
            defaultValue={userConf.image}
            name="image"
            {...register('image')}
          />

          <InputColorContainer isDark={isDark}>
            <label>Selecciona un color</label>
            <InputColor
              defaultValue={userConf.color}
              placeholder="Enlace de la imágen"
              name="color"
              type="color"
              {...register('color', {
                required: {
                  value: 'true',
                  message: 'Campo requerido',
                },
              })}
            ></InputColor>
          </InputColorContainer>
          {errors.color && <MessageError>{errors.color.message}</MessageError>}
        </Modal.Body>
        <Modal.Footer>
          <Button
            auto
            type="submit"
            css={{
              margin: '0 auto',
              background: '#1A5D75',
              color: 'white',
            }}
          >
            ¡Cámbialo!
          </Button>
        </Modal.Footer>
      </form>
    </StyledModal>
  );
}
