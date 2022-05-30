import { Col, Row, Text, Tooltip } from '@nextui-org/react';
import { IconButton } from 'components/Lists/styled';
import { useAuth } from 'context/authContext';
import { getAllDeadLineTasks, getUserLists } from 'db/lists';
import { removeTaskFromDb, toggleTaskInDb } from 'db/tasks';
import { Delete } from 'icons/Delete';
import { Edit } from 'icons/Edit';
import { useNavigate } from 'react-router-dom';
import { RowCell } from './styled';

export const TableRow = ({
  listID,
  listName,
  listTag,
  taskDescription,
  taskDeadlineDate,
}) => {
  const { userConf, updateWeekTasks, setLists } = useAuth();

  const actualDate = new Date(Date.now());
  actualDate.setDate(actualDate.getDate());
  const taskDate = new Date(taskDeadlineDate.seconds * 1000);

  actualDate.setHours(0, 0, 0, 0);
  taskDate.setHours(0, 0, 0, 0);

  const navigate = useNavigate();

  const finishTask = async () => {
    await toggleTaskInDb(taskDescription, false, listID);
    await getAllDeadLineTasks(userConf.email, updateWeekTasks);
    await getUserLists(userConf.email).then((s) => setLists(s));
  };

  const editTask = () => {
    window.localStorage.setItem('listId', listID);
    window.localStorage.setItem('listName', listName);

    navigate('/task');
  };

  const removeTask = async () => {
    await removeTaskFromDb(taskDescription);
    await getAllDeadLineTasks(userConf.email, updateWeekTasks);
    await getUserLists(userConf.email).then((s) => setLists(s));
  };

  return (
    <>
      <tr>
        <td>{listName}</td>
        <td>{listTag}</td>
        <RowCell taskOverdue={actualDate > taskDate}>
          {taskDate.toLocaleDateString()}
        </RowCell>
        <td>{taskDescription}</td>
        <td>
          <Row>
            <Col>
              <Tooltip content="Acabar tarea">
                <IconButton onClick={() => finishTask()}>
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
                <IconButton onClick={() => editTask()}>
                  <Edit size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col>
              <Tooltip
                content="Eliminar tarea"
                color="error"
                onClick={() => removeTask()}
              >
                <IconButton>
                  <Delete size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        </td>
      </tr>
    </>
  );
};
