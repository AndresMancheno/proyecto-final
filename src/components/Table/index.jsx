import { Table, Text } from '@nextui-org/react';
import { TitleList } from 'components/Lists/styled';
import { useAuth } from 'context/authContext';
import { getAllDeadLineTasks } from 'db/lists';

import { useEffect, useState } from 'react';
import { HeaderTable } from './Header';
import { TableRow } from './Row';
import { StyledTable } from './styled';
export const TaskTable = () => {
  const { userConf } = useAuth();
  const [todayTasks, setTodayTasks] = useState([]);

  useEffect(() => {
    async function getThisWeekTasks() {
      await getAllDeadLineTasks(userConf.email, setTodayTasks);
    }
    getThisWeekTasks();
  }, [userConf.email]);

  return (
    <>
      {todayTasks.length !== 0 ? (
        <StyledTable>
          <thead>
            <HeaderTable />
          </thead>
          <tbody>
            {todayTasks.map((task) => (
              <TableRow
                key={task.taskID}
                listID={task.listID}
                listName={task.listName}
                listTag={task.listTag}
                taskDescription={task.taskDescription}
                taskDeadlineDate={task.taskDeadlineDate}
                setTodayTasks={setTodayTasks}
              />
            ))}
          </tbody>
        </StyledTable>
      ) : (
        <TitleList>
          <Text h3 color="green">
            ¡Has hecho todas las tareas!
          </Text>
        </TitleList>
      )}
    </>
  );
};
