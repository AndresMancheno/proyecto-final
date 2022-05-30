import { Button, Card, Divider, Text, useTheme } from '@nextui-org/react';
import EditList from 'components/Modal/List/Edit';
import { useAuth } from 'context/authContext';
import { getUserLists, removeListFromDb } from 'db/lists';
import { getUserTasks } from 'db/tasks';
import { pickTextColorBasedOnBgColor } from 'lib/theme/theme';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {
  CardList,
  InfoContainer,
  ListElement,
  RowInfo,
  StyledList,
} from './styled';

export function CreateCardList({ list }) {
  const { userConf, updateLists, lists, tasks, updateListTasks } = useAuth();
  const [open, setOpen] = useState(false);
  const [textColor, setTextColor] = useState('#fff');

  const navigate = useNavigate();

  const redirectToTask = async (id, name) => {
    window.localStorage.setItem('listId', id);
    window.localStorage.setItem('listName', name);
    navigate('/task');
  };

  useEffect(() => {
    setTextColor(pickTextColorBasedOnBgColor(list.color));
  }, [list.color]);

  useEffect(() => {
    const getTasks = async () => {
      updateListTasks(
        (await getUserTasks(list.id)).filter((task) => task.isDone === false)
      );
    };
    getTasks();
  }, [userConf.email, lists]);

  const { isDark } = useTheme();

  const removeList = async (id) => {
    try {
      await removeListFromDb(id);
      getUserLists(userConf.email).then((lists) => updateLists(lists));
      if (isDark) {
        toast.success('Lista eliminada ^^', {
          style: { color: '#fff', background: '#333' },
        });
      } else {
        toast.success('Lista eliminada ^^');
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
      <CardList css={{ background: list.color, border: '1px solid #000' }}>
        <Card.Header>
          <InfoContainer>
            <RowInfo>
              <Text
                h3
                css={{ cursor: 'pointer', color: `${textColor}` }}
                onClick={() => redirectToTask(list.id, list.name)}
              >
                {list.name}
              </Text>
              <Text h5 css={{ color: `${textColor}` }}>
                {list.tag}
              </Text>
            </RowInfo>
            <RowInfo
              css={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Button
                size="xs"
                color="warning"
                onClick={() => setOpen(true)}
                icon={<ion-icon size="small" name="create-outline" />}
              />
              <Button
                size="xs"
                color="error"
                onClick={() => removeList(list.id)}
                icon={<ion-icon size="small" name="trash-sharp" />}
              />
            </RowInfo>
          </InfoContainer>
        </Card.Header>
        <Divider />
        <Card.Body>
          {tasks.length !== 0 ? (
            <StyledList>
              {tasks.map((task) => (
                <ListElement
                  key={task.id}
                  onClick={() => redirectToTask(list.id, list.name)}
                  css={{ color: `${textColor}` }}
                >
                  {task.description}
                </ListElement>
              ))}
            </StyledList>
          ) : (
            <Text h4 css={{ textAlign: 'center', color: `${textColor}` }}>
              No tienes ninguna tarea en la lista!
            </Text>
          )}
        </Card.Body>
      </CardList>
      <EditList list={list} open={open} setOpen={setOpen} />
    </div>
  );
}
