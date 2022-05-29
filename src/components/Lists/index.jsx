import { Button, Text } from '@nextui-org/react';
import AddList from 'components/Modal/List/Create';
import { useAuth } from 'context/authContext';
import { getUserLists } from 'db/lists';
import { Add } from 'icons/Add';
import { useEffect, useState } from 'react';
import { CreateCardList } from './Create';
import { motion } from 'framer-motion';

import { GreetingUser, GridListContainer, TitleList } from './styled';
import { TaskTable } from 'components/Table';

export default function List() {
  const { userConf, lists, setLists } = useAuth();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getUserLists(userConf.email).then((lists) => setLists(lists));
  }, [userConf.email]);

  return (
    <>
      <div>
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

        <GridListContainer>
          {lists &&
            lists.map((list) => {
              return <CreateCardList key={list.id} list={list} />;
            })}
        </GridListContainer>

        <TitleList>
          <Text h3> Tus tareas para esta semana </Text>
        </TitleList>
        <TaskTable />

        <TitleList>
          <Text h3>Listas ordenadas por el tag</Text>
        </TitleList>
      </div>

      <AddList open={open} setOpen={setOpen} />
    </>
  );
}
