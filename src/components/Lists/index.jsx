import { Button, Text } from '@nextui-org/react';
import AddList from 'components/Modal/List';
import { useAuth } from 'context/authContext';
import { getUserLists } from 'db/lists';
import { getUserSections } from 'db/sections';
import { Add } from 'icons/Add';
import { useEffect, useState } from 'react';
import { CreateCardList } from './Create';

import { GridListContainer, TitleListContainer } from './styled';

export default function List() {
  const { userConf, lists, setLists } = useAuth();
  const [open, setOpen] = useState(false);

  const sectionId = window.localStorage.getItem('sectionId');

  useEffect(async () => {
    await getUserLists(sectionId).then((s) => setLists(s));
  }, [userConf.email]);

  return (
    <>
      <div>
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

      <AddList open={open} setOpen={setOpen} />
    </>
  );
}
