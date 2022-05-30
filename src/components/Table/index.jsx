import { Text } from '@nextui-org/react';
import { TitleList } from 'components/Lists/styled';
import { useAuth } from 'context/authContext';
import { getAllDeadLineTasks } from 'db/lists';

import { useEffect } from 'react';
import { HeaderTable } from './Header';
import { TableRow } from './Row';
import { NoTaskContainer, StyledTable } from './styled';

export const TaskTable = () => {
  const { userConf, lists, updateWeekTasks, weekTasks } = useAuth();

  useEffect(() => {
    async function getThisWeekTasks() {
      await getAllDeadLineTasks(userConf.email, updateWeekTasks);
    }
    getThisWeekTasks();
  }, [userConf.email, lists]);

  return (
    <>
      {weekTasks.length !== 0 ? (
        <StyledTable>
          <thead>
            <HeaderTable />
          </thead>
          <tbody>
            {weekTasks.map((task) => (
              <TableRow
                key={task.taskID}
                listID={task.listID}
                listName={task.listName}
                listTag={task.listTag}
                taskDescription={task.taskDescription}
                taskDeadlineDate={task.taskDeadlineDate}
              />
            ))}
          </tbody>
        </StyledTable>
      ) : (
        <NoTaskContainer>
          <Text h4 color="green">
            ¡Has hecho todas las tareas!
          </Text>
        </NoTaskContainer>
      )}
    </>
  );
};
