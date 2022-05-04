import { Modal, Button, Text, Input } from '@nextui-org/react';

export default function ChangeNameUser() {
  return (
    <>
      <Modal aria-labelledby="modal-title" open>
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
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto css={{ margin: '0 auto' }}>
            ¡Cámbialo!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
