import { Modal, Button, Text, useTheme } from '@nextui-org/react';
import { useAuth } from 'context/authContext';
import { addList, getUserLists } from 'db/lists';
import { useForm } from 'react-hook-form';
import {
  InputColor,
  InputColorContainer,
  MessageError,
  StyledInput,
  StyledModal,
} from './styled';

export default function AddList({ open, setOpen }) {
  const { userConf, setLists } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => addListToFirebase(values);

  const addListToFirebase = async (values) => {
    try {
      await addList(values, userConf.email);
      getUserLists(userConf.email).then((s) => setLists(s));
      setOpen(false);
    } catch (error) {
      console.log(error);
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
            Crea tú nueva{' '}
            <Text b size={18}>
              lista
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <StyledInput
            placeholder="Nombre de la lista"
            name="name"
            {...register('name', {
              required: {
                value: 'true',
                message: 'Campo requerido',
              },
              maxLength: {
                value: 15,
                message: 'El nombre tiene que tener menos de 15 letras :(',
              },
            })}
          />
          {errors.name && <MessageError>{errors.name.message}</MessageError>}

          <InputColorContainer>
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
            />
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
            ¡Créala!
          </Button>
        </Modal.Footer>
      </form>
    </StyledModal>
  );
}
