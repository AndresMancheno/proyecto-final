import { Col, Row, Table, Text, Tooltip } from '@nextui-org/react';
import { IconButton, TitleListContainer } from 'components/Lists/styled';
import { useAuth } from 'context/authContext';
import { removeTaskFromDb, toggleTaskInDb } from 'db/tasks';
import { Delete } from 'icons/Delete';
import { Edit } from 'icons/Edit';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const TaskTable = () => {
  const { userConf } = useAuth();

  const [todayTasks, setTodayTasks] = useState([]);

  useEffect(async () => {
    // await getAllDeadLineTasks(userConf.email, setTodayTasks);
  }, [userConf.email]);
  const columns = [
    { name: 'Lista', uid: 'listName' },
    { name: 'Descripción', uid: 'description' },
    { name: 'Acciones', uid: 'actions' },
  ];
  const navigate = useNavigate();

  const finishTask = async (task) => {
    const finishTask = {
      description: task.description,
      deadLine: task.deadLine,
      isDone: false,
      listID: task.listID,
    };
    // await toggleTaskInDb(finishTask, task.listID);
    // await getAllDeadLineTasks(userConf.email, setTodayTasks);
  };

  const editTask = (task) => {
    window.localStorage.setItem('listId', task.listID);
    window.localStorage.setItem('listName', task.listName);
    navigate('/task');
  };

  const removeTask = async (id) => {
    // await removeTaskFromDb(id);
    // await getAllDeadLineTasks(userConf.email, setTodayTasks);
  };
  const renderCell = (task, columnKey) => {
    const cellValue = task[columnKey];
    switch (columnKey) {
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
  return (
    <>
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
        <TitleListContainer>
          <Text h3 color="green">
            ¡Has hecho todas las tareas!
          </Text>
        </TitleListContainer>
      )}
    </>
  );
};
