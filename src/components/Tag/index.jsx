import { useAuth } from 'context/authContext';
import { useEffect, useState } from 'react';
import { SelectTag } from './Create';
import { CreateCardList } from 'components/Lists/Create';
import { GridListContainer } from 'components/Lists/styled';
export const OrderByTag = () => {
  const { lists, tags } = useAuth();
  const [selectState, setSelectState] = useState({
    tagSelected: '',
    listFiltered: [],
  });

  useEffect(() => {
    setSelectState({
      ...selectState,
      listFiltered: lists.filter(
        (list) => list.tag === selectState.tagSelected
      ),
    });
  }, [selectState.tagSelected]);

  useEffect(() => {
    setSelectState({
      tagSelected: '',
      listFiltered: [],
    });
  }, [lists]);

  return (
    <>
      <SelectTag
        selectState={selectState}
        setSelectState={setSelectState}
        lists={lists}
        tags={tags}
      />

      <GridListContainer>
        {selectState.listFiltered.map((list) => {
          return <CreateCardList key={list.id} list={list} />;
        })}
      </GridListContainer>
    </>
  );
};
