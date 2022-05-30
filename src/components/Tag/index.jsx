import { useAuth } from 'context/authContext';
import { useEffect, useState } from 'react';
import { SelectTag } from './Create';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper';
import { CreateCardList } from 'components/Lists/Create';
import { GridListContainer } from 'components/Lists/styled';
export const OrderByTag = () => {
  const { lists, tags } = useAuth();
  const [selectState, setSelectState] = useState({
    tagSelected: '',
    listFiltered: [],
  });

  useEffect(() => {
    console.log({ lists, tags });
    setSelectState({
      ...selectState,
      listFiltered: lists.filter((list) => list.tag === selectState.tag),
    });
  }, [selectState.tag, lists]);
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
