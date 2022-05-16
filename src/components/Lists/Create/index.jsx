import { Button, Card, Divider, Row, Text } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { CardList } from './styled';

export function CreateCardList({ list }) {
  const navigate = useNavigate();

  const redirectToTask = async (id, name) => {
    window.localStorage.setItem('listId', id);
    window.localStorage.setItem('listName', name);
    navigate('/task');
  };

  return (
    <div>
      <CardList css={{ background: list.color }}>
        <Card.Header>
          <Row justify="space-between" align="center">
            <Text
              h3
              color="white"
              css={{ cursor: 'pointer' }}
              onClick={() => redirectToTask(list.id, list.name)}
            >
              {list.name}
            </Text>
            <Button size="xs" color="error">
              Eliminar lista
            </Button>
          </Row>
        </Card.Header>
        <Divider />
        {/* <Card.Body css={{ py: '$10' }}>
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </Card.Body> */}
      </CardList>
    </div>
  );
}
