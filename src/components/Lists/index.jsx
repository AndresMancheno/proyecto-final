import { Button, Text } from '@nextui-org/react';
import AddList from 'components/Modal/List/Create';
import { useAuth } from 'context/authContext';
import { getAllDeadLineTasks, getUserLists } from 'db/lists';
import { Add } from 'icons/Add';
import { useEffect, useState } from 'react';
import { CreateCardList } from './Create';
import { motion } from 'framer-motion';

import { GreetingUser, GridListContainer, TitleList } from './styled';
import { TaskTable } from 'components/Table';
import { OrderByTag } from 'components/Tag';

export default function List() {
  const { userConf, lists, updateLists, updateTags } = useAuth();
  const [open, setOpen] = useState(false);
  const [weekTasks, setWeekTasks] = useState([]);

  useEffect(() => {
    getUserLists(userConf.email).then((lists) => updateLists(lists));

    const userTags = lists.map((list) => list.tag);
    const filtredTags = new Set(userTags);
    updateTags([...filtredTags]);
  }, [userConf.email]);

  useEffect(() => {
    const userTags = lists.map((list) => list.tag);
    const filtredTags = new Set(userTags);
    updateTags([...filtredTags]);

    async function getThisWeekTasks() {
      await getAllDeadLineTasks(userConf.email, setWeekTasks);
    }
    getThisWeekTasks();
  }, [lists]);

  return (
    <>
      <div style={{ marginBottom: '2rem' }}>
        <motion.div animate={{ y: 10 }} transition={{ duration: 0.5 }}>
          <GreetingUser h2>Bienvenid@ {userConf.name}</GreetingUser>
        </motion.div>

        <TitleList addMarginRight>
          <Text h3> Tus listas </Text>
          <Button
            auto
            light
            bordered
            borderWeight="normal"
            icon={<Add fill={'currentColor'} />}
            onClick={() => setOpen(true)}
          />
        </TitleList>

        {lists.length > 0 ? (
          <>
            <GridListContainer>
              {lists.map((list) => {
                return <CreateCardList key={list.id} list={list} />;
              })}
            </GridListContainer>

            <TitleList>
              <Text h3> Tus tareas para esta semana </Text>
            </TitleList>
            <TaskTable weekTasks={weekTasks} setWeekTasks={setWeekTasks} />

            <TitleList>
              <Text h3>Listas ordenadas por el tag</Text>
            </TitleList>
            <OrderByTag setWeekTasks={setWeekTasks} />
          </>
        ) : (
          <TitleList>
            <>
              <Text
                h2
                css={{
                  textGradient: '45deg, $purple600 -20%, $pink600 100%',
                }}
                weight="bold"
              >
                {' '}
                Empieza creando listas
              </Text>
            </>
          </TitleList>
        )}
      </div>

      <AddList open={open} setOpen={setOpen} />
    </>
  );
}
