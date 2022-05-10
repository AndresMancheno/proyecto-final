import {
  Button,
  Card,
  Divider,
  Input,
  Modal,
  Row,
  Text,
} from '@nextui-org/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/authContext';
import { addSection, getUserSections } from '../../db/sections';
import { Add } from '../../icons/Add';
import { CreateCardSection } from './createSection';
import {
  CardSection,
  GridSectionContainer,
  MessageError,
  StyledInput,
  StyledOption,
  StyledSelect,
  TitleSectionContainer,
} from './styled';

export default function Section() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  const onSubmit = (values) => createSection(values);

  const userSections = [];
  const sections = userSections.map((section) => (
    <CreateCardSection
      key={section.id}
      color={section.color}
      name={section.name}
    />
  ));
  const [section, setSections] = useState(sections);
  const createSection = async (value) => {
    try {
      await addSection(value, user.email);
      let newSection = { color: value.color, name: value.name, id: value.name };
      setSections(
        section.concat(
          <CreateCardSection
            key={newSection.id}
            color={newSection.color}
            name={newSection.name}
          />
        )
      );
      setOpen(false);
    } catch (ev) {
      //
    }
  };

  return (
    <>
      <div>
        <TitleSectionContainer>
          <Text h3> Tus secciones </Text>
          <Button
            auto
            color="primary"
            light
            bordered
            borderWeight="normal"
            icon={<Add />}
            onClick={() => setOpen(true)}
          />
        </TitleSectionContainer>

        <GridSectionContainer>{section}</GridSectionContainer>
      </div>

      <Modal
        open={open}
        closeButton
        aria-labelledby="modal-title"
        onClose={() => setOpen(false)}
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
              // defaultValue={userColor}
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
            {errors.name && <MessageError>{errors.name.message}</MessageError>}
            <StyledSelect
              // defaultValue={userColor}
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
            </StyledSelect>{' '}
            {errors.color && (
              <MessageError>{errors.color.message}</MessageError>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button auto type="submit" css={{ margin: '0 auto' }}>
              ¡Créala!
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
