import { Button, Card, Divider, Row, Text } from '@nextui-org/react';
import { CardSection } from './styled';

export function CreateCardSection({ section }) {
  return (
    <div>
      <CardSection css={{ background: section.color }}>
        <Card.Header>
          <Row justify="space-between" align="center">
            <Text h3 color="white">
              {section.name}
            </Text>
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
