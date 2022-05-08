import { Button, Card, Divider, Row, Text } from '@nextui-org/react';
import { CardSection } from './styled';

export function CreateCardSection(props) {
  return (
    <div>
      <CardSection color={props.color}>
        <Card.Header>
          <Row justify="space-between" align="center">
            <Text h3>{props.name}</Text>
            <Button size="xs" color="error">
              Eliminar sección
            </Button>
          </Row>
        </Card.Header>
        <Divider />
        {/* <Card.Body css={{ py: '$10' }}>
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </Card.Body> */}
      </CardSection>
    </div>
  );
}
