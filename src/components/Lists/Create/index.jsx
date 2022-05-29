import { Button, Card, Divider, Row, Text, useTheme } from '@nextui-org/react';
import { useAuth } from 'context/authContext';
import { getUserLists, removeListFromDb } from 'db/lists';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { CardList } from './styled';

export function CreateCardList({ list }) {
  const navigate = useNavigate();
  const { setLists } = useAuth();

  const redirectToTask = async (id, name) => {
    window.localStorage.setItem('listId', id);
    window.localStorage.setItem('listName', name);
    navigate('/task');
  };
  const { isDark } = useTheme();

  const removeList = async (id) => {
    try {
      await removeListFromDb(id);
      await getUserLists(list.sectionID).then((s) => setLists(s));
      if (isDark) {
        toast.success('Lista eliminada con éxito ^^', {
          style: { color: '#fff', background: '#333' },
        });
      } else {
        toast.success('Lista eliminada con éxito ^^');
      }
    } catch (er) {
      if (isDark) {
        toast.error('Ha ocurrido un error al eliminar la lista :(', {
          style: { color: '#fff', background: '#333' },
        });
      } else {
        toast.error('Ha ocurrido un error al eliminar la lista :(');
      }
    }
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
            <Button
              size="xs"
              color="error"
              onClick={() => removeList(list.id)}
              icon={<ion-icon size="small" name="trash-sharp" />}
            />
          </Row>
        </Card.Header>
        <Divider />
      </CardList>
    </div>
  );
}
