import { Button, Card, Divider, Row, Text } from '@nextui-org/react';
import { Add } from '../../icons/Add';
import {
  CardSection,
  GridSectionContainer,
  TitleSectionContainer,
} from './styled';

export default function Section() {
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
          />
        </TitleSectionContainer>

        <GridSectionContainer>
          <div className="card1">
            <CardSection color="default">
              <Card.Header>
                <Row justify="space-between" align="center">
                  <Text h3>Hogar</Text>
                  <Button size="xs" color="error">
                    Eliminar sección
                  </Button>
                </Row>
              </Card.Header>
              <Divider />
              <Card.Body css={{ py: '$10' }}>
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </Card.Body>
            </CardSection>
          </div>
          <div className="card2">
            <CardSection color="primary">
              <Card.Header>
                <Row justify="space-between" align="center">
                  <Text h3>Card Title</Text>
                  <Button size="xs" color="error">
                    Eliminar sección
                  </Button>
                </Row>
              </Card.Header>
              <Divider />
              <Card.Body css={{ py: '$10' }}>
                <Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </Text>
              </Card.Body>
            </CardSection>
          </div>
          <div className="card2">
            <CardSection color="success">
              <Card.Header>
                <Row justify="space-between" align="center">
                  <Text h3>Card Title</Text>
                  <Button size="xs" color="error">
                    Eliminar sección
                  </Button>
                </Row>
              </Card.Header>
              <Divider />
              <Card.Body css={{ py: '$10' }}>
                <Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card content. Some quick example text to build
                  on the card title and make up the bulk of the card content.
                  Some quick example text to build on the card title and make up
                  the bulk of the card content. Some quick example text to build
                  on the card title and make up the bulk of the card content.
                  Some quick example text to build on the card title and make up
                  the bulk of the card content. Some quick example text to build
                  on the card title and make up the bulk of the card content.
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </Text>
              </Card.Body>
            </CardSection>
          </div>
          <div className="card1">
            <CardSection color="warning">
              <Card.Header>
                <Row justify="space-between" align="center">
                  <Text h3>Card Title</Text>
                  <Button size="xs" color="error">
                    Eliminar sección
                  </Button>
                </Row>
              </Card.Header>
              <Divider />
              <Card.Body css={{ py: '$10' }}>
                <Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </Text>
              </Card.Body>
            </CardSection>
          </div>
          <div className="card2">
            <CardSection color="error">
              <Card.Header>
                <Row justify="space-between" align="center">
                  <Text h3>Card Title</Text>
                  <Button size="xs" color="error">
                    Eliminar sección
                  </Button>
                </Row>
              </Card.Header>
              <Divider />
              <Card.Body css={{ py: '$10' }}>
                <Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </Text>
              </Card.Body>
            </CardSection>
          </div>
          <div className="card2">
            <CardSection color="gradient">
              <Card.Header>
                <Row justify="space-between" align="center">
                  <Text h3>Card Title</Text>
                  <Button size="xs" color="error">
                    Eliminar sección
                  </Button>
                </Row>
              </Card.Header>
              <Divider />
              <Card.Body css={{ py: '$10' }}>
                <Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </Text>
              </Card.Body>
            </CardSection>
          </div>{' '}
          <div className="card1">
            <CardSection color="">
              <Card.Header>
                <Row justify="space-between" align="center">
                  <Text h3>Card Title</Text>
                  <Button size="xs" color="error">
                    Eliminar sección
                  </Button>
                </Row>
              </Card.Header>
              <Divider />
              <Card.Body css={{ py: '$10' }}>
                <Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </Text>
              </Card.Body>
            </CardSection>
          </div>
        </GridSectionContainer>
      </div>
    </>
  );
}
