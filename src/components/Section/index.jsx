import {
  Button,
  Col,
  Row,
  Table,
  Text,
  Tooltip,
  useTheme,
} from '@nextui-org/react';
import AddSection from 'components/Modal/Section';
import { useAuth } from 'context/authContext';
import { getAllDeadLineTasks, getUserSections } from 'db/sections';
import { Add } from 'icons/Add';
import { useEffect, useState } from 'react';
import { CreateCardSection } from './Create';

import {
  GridSectionContainer,
  IconButton,
  StyledBadge,
  TitleSectionContainer,
} from './styled';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination } from 'swiper';
import { getUserLists } from 'db/lists';
import { Eye, EyeIcon } from 'icons/Eye';
import { Edit } from 'icons/Edit';
import './styled.css';
import { Delete } from 'icons/Delete';
import { removeTaskFromDb, toggleTaskInDb } from 'db/tasks';
import { async } from '@firebase/util';
import { useNavigate } from 'react-router-dom';

export default function Section() {
  const { userConf, sections, setSections } = useAuth();
  const [todayTasks, setTodayTasks] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const columns = [
    { name: 'Sección', uid: 'sectionName' },
    { name: 'Lista', uid: 'listName' },
    { name: 'Descripción', uid: 'description' },
    { name: 'Acciones', uid: 'actions' },
  ];

  const finishTask = async (task) => {
    const finishTask = {
      description: task.description,
      deadLine: task.deadLine,
      isDone: false,
      listID: task.listID,
    };
    await toggleTaskInDb(finishTask, task.listID);
    await getAllDeadLineTasks(userConf.email, setTodayTasks);
  };

  const editTask = (task) => {
    window.localStorage.setItem('listId', task.listID);
    window.localStorage.setItem('listName', task.listName);
    navigate('/task');
  };

  const removeTask = async (id) => {
    await removeTaskFromDb(id);
    await getAllDeadLineTasks(userConf.email, setTodayTasks);
  };

  const renderCell = (task, columnKey) => {
    const cellValue = task[columnKey];
    switch (columnKey) {
      case 'sectionName':
        return (
          <Text b size={14}>
            {cellValue}
          </Text>
        );
      case 'listName':
        return (
          <Text b size={14}>
            {cellValue}
          </Text>
        );

      case 'description':
        return (
          <Text b size={14}>
            {cellValue}
          </Text>
        );

      case 'actions':
        return (
          <Row>
            <Col>
              <Tooltip content="Acabar tarea">
                <IconButton onClick={() => finishTask(task)}>
                  <ion-icon
                    name="checkmark-done-outline"
                    size={20}
                    fill="white"
                  />
                </IconButton>
              </Tooltip>
            </Col>
            <Col>
              <Tooltip content="Editar tarea">
                <IconButton onClick={() => editTask(task)}>
                  <Edit size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col>
              <Tooltip
                content="Eliminar tarea"
                color="error"
                onClick={() => removeTask(task.description)}
              >
                <IconButton>
                  <Delete size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );

      default:
        return cellValue;
    }
  };
  useEffect(async () => {
    getUserSections(userConf.email).then((s) => setSections(s));
    await getAllDeadLineTasks(userConf.email, setTodayTasks);
  }, [userConf.email]);

  return (
    <>
      <div style={{ overflow: 'auto !important' }}>
        <TitleSectionContainer>
          <Text h3> Tus secciones </Text>
          <Button
            auto
            bordered
            light
            borderWeight="normal"
            icon={<Add fill={isDark ? 'white' : 'black'} />}
            color="success"
            onClick={() => setOpen(true)}
          />
        </TitleSectionContainer>

        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          style={{ marginTop: '5rem', width: '75%' }}
        >
          {sections &&
            sections.map((section) => {
              return (
                <SwiperSlide
                  key={`section${section.id}`}
                  style={{ width: 'auto !important', marginRight: '30px' }}
                >
                  <CreateCardSection section={section} />
                </SwiperSlide>
              );
            })}
        </Swiper>

        <TitleSectionContainer>
          <Text h3> Tus tareas para hoy </Text>
        </TitleSectionContainer>
        {todayTasks.length !== 0 ? (
          <Table
            aria-label="Example table with custom cells"
            css={{
              height: 'auto',
              width: '50%',
              margin: '0 auto',
              overflowX: 'auto',
            }}
            selectionMode="none"
          >
            <Table.Header columns={columns}>
              {(column) => (
                <Table.Column
                  key={column.uid}
                  hideHeader={column.uid === 'actions'}
                >
                  {column.name}
                </Table.Column>
              )}
            </Table.Header>

            <Table.Body items={todayTasks}>
              {(item) => (
                <Table.Row>
                  {(columnKey) => (
                    <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                  )}
                </Table.Row>
              )}
            </Table.Body>
          </Table>
        ) : (
          <TitleSectionContainer>
            <Text h3 color="green">
              ¡Has hecho todas las tareas!
            </Text>
          </TitleSectionContainer>
        )}
      </div>

      <AddSection open={open} setOpen={setOpen} />
    </>
  );
}
