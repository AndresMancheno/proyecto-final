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
export const OrderByTag = ({ lists, tags }) => {
  const { userConf } = useAuth();
  const [listFiltered, setListFiltered] = useState([]);
  useEffect(() => {
    setListFiltered(lists.filter((list) => list.tag === tags[0]));
  }, [userConf.email]);
  return (
    <>
      <SelectTag
        lists={lists}
        tags={tags}
        listFiltered={listFiltered}
        setListFiltered={setListFiltered}
      />

      <GridListContainer>
        {listFiltered &&
          listFiltered.map((list) => {
            return <CreateCardList key={list.id} list={list} />;
          })}
      </GridListContainer>
    </>
  );
};
