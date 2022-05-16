import { Modal, Button, Text, useTheme } from '@nextui-org/react';
import { useAuth } from 'context/authContext';
import { addSection, getUserSections } from 'db/sections';
import { useForm } from 'react-hook-form';
import {
  InputColor,
  InputColorContainer,
  MessageError,
  StyledInput,
  StyledModal,
} from './styled';

export default function AddSection({ open, setOpen }) {
  const { userConf, setSections } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => addSectionToFirebase(values);

  const addSectionToFirebase = async (values) => {
    try {
      await addSection(values, userConf.email);

      getUserSections(userConf.email).then((s) => setSections(s));
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
              sección
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <StyledInput
            placeholder="Nombre de la sección"
            name="name"
            {...register('name', {
              required: {
                value: 'true',
                message: 'Campo requerido',
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
