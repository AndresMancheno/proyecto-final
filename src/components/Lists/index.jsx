import { Button, Text } from '@nextui-org/react';
import AddList from 'components/Modal/List';
import { useAuth } from 'context/authContext';
import { getUserLists } from 'db/lists';
import { Add } from 'icons/Add';
import { useEffect, useState } from 'react';
import { CreateCardList } from './Create';
import { motion } from 'framer-motion';

import { GreetingUser, GridListContainer, TitleListContainer } from './styled';
import { TaskTable } from 'components/Table';

export default function List() {
  const { userConf, lists, setLists } = useAuth();
  const [open, setOpen] = useState(false);

  useEffect(async () => {
    getUserLists(userConf.email).then((lists) => setLists(lists));
  }, [userConf.email]);

  return (
    <>
      <div>
        <motion.div animate={{ y: 10 }} transition={{ duration: 0.5 }}>
          <GreetingUser h2>Bienvenid@ {userConf.name}</GreetingUser>
        </motion.div>

        <TitleListContainer>
          <Text h3> Tus listas </Text>
          <Button
            auto
            light
            bordered
            borderWeight="normal"
            icon={<Add fill={'currentColor'} />}
            onClick={() => setOpen(true)}
          />
        </TitleListContainer>

        <GridListContainer>
          {lists &&
            lists.map((list) => {
              return <CreateCardList key={list.id} list={list} />;
            })}
        </GridListContainer>
      </div>

      <TitleListContainer>
        <Text h3> Tus tareas para hoy </Text>
        <TaskTable />
      </TitleListContainer>

      <TitleListContainer>Listas ordenadas por el tag</TitleListContainer>

      <AddList open={open} setOpen={setOpen} />
    </>
  );
}
