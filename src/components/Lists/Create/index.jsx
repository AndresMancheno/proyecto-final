import { Button, Card, Divider, Row, Text } from '@nextui-org/react';
import { CardList } from './styled';

export function CreateCardList({ list }) {
  return (
    <div>
      <CardList css={{ background: list.color }}>
        <Card.Header>
          <Row justify="space-between" align="center">
            <Text h3 color="white">
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
