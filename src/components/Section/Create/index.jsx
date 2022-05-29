import { Button, Card, Divider, Row, Text, useTheme } from '@nextui-org/react';
import { useAuth } from 'context/authContext';
import { getUserLists } from 'db/lists';
import { getUserSections, removeSectionFromDb } from 'db/sections';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { CardSection, ListElement, StyledRow, UnorderedList } from './styled';

export function CreateCardSection({ section, lists }) {
  const { userConf, setSections } = useAuth();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const [userLists, setUserLists] = useState([]);

  useEffect(() => {
    getUserLists(section.id).then((s) => setUserLists(s));
  }, []);

  const redirectToList = async (id) => {
    window.localStorage.setItem('sectionId', id);
    navigate('/list');
  };

  const redirectToTask = async (id, name) => {
    window.localStorage.setItem('listId', id);
    window.localStorage.setItem('listName', name);
    navigate('/task');
  };

  const removeSection = async (id) => {
    try {
      await removeSectionFromDb(id);
      await getUserSections(userConf.email).then((s) => setSections(s));
      if (isDark) {
        toast.success('Sección eliminada con éxito ^^', {
          style: { color: '#fff', background: '#333' },
        });
      } else {
        toast.success('Sección eliminada con éxito ^^');
      }
    } catch (er) {
      if (isDark) {
        toast.error('Ha ocurrido un error al eliminar la seción :(', {
          style: { color: '#fff', background: '#333' },
        });
      } else {
        toast.error('Ha ocurrido un error al eliminar la seción :(');
      }
    }
  };

  return (
    <div>
      <CardSection css={{ background: section.color }}>
        <Card.Header>
          <StyledRow justify="space-between" align="center">
            <Text
              h3
              color="white"
              style={{ fontWeight: 'bold' }}
              css={{ cursor: 'pointer', marginBottom: '0.5rem' }}
              onClick={() => redirectToList(section.id)}
            >
              {section.name}
            </Text>
            <Button
              size="xs"
              color="error"
              onClick={() => removeSection(section.id)}
              icon={<ion-icon size="small" name="trash-sharp" />}
            />
          </StyledRow>
        </Card.Header>
        <Divider />
        <Card.Body>
          <UnorderedList>
            {userLists &&
              userLists.map((list, index) => {
                return (
                  <>
                    <ListElement
                      key={`list${index}`}
                      onClick={() => redirectToTask(list.id, list.name)}
                    >
                      {list.name}
                    </ListElement>
                  </>
                );
              })}
          </UnorderedList>
        </Card.Body>
      </CardSection>
    </div>
  );
}
