import { Modal, Button, Text, useTheme } from '@nextui-org/react';
import { useAuth } from 'context/authContext';
import { editListInDB, getUserLists } from 'db/lists';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {
  InputColor,
  InputColorContainer,
  MessageError,
  StyledInput,
  StyledModal,
} from './styled';

export default function EditList({ list, open, setOpen }) {
  const { lists, userConf, updateLists, updateTags } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => editList(values);

  const editList = async (values) => {
    try {
      await editListInDB(values, list.id);
      await getUserLists(userConf.email).then((lists) => updateLists(lists));
      const userTags = lists.map((list) => list.tag);
      const filtredTags = new Set(userTags);
      updateTags([...filtredTags]);
      setOpen(false);
      if (isDark) {
        toast.success('Lista actualizada', {
          style: { color: '#fff', background: '#333' },
        });
      } else {
        toast.success('Lista actualizada');
      }
    } catch (error) {
      if (isDark) {
        toast.success('Ha habido un problema al actualizar la lista', {
          style: { color: '#fff', background: '#333' },
        });
      } else {
        toast.success('Ha habido un problema al actualizar la lista');
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
              lista
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <StyledInput
            placeholder="Nombre de la lista"
            defaultValue={list.name}
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

          <StyledInput
            placeholder="Nombre del tag"
            defaultValue={list.tag}
            name="tag"
            {...register('tag', {
              required: {
                value: 'true',
                message: 'Campo requerido',
              },
              maxLength: {
                value: 10,
                message:
                  'El nombre del tag tiene que tener menos de 10 letras :(',
              },
            })}
          />
          {errors.tag && <MessageError>{errors.tag.message}</MessageError>}

          <InputColorContainer backgroundDark={isDark}>
            <label>Selecciona un color</label>
            <InputColor
              placeholder="Enlace de la imágen"
              defaultValue={list.color}
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
            ¡Edítala!
          </Button>
        </Modal.Footer>
      </form>
    </StyledModal>
  );
}
