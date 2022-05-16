import { Spacer, useTheme } from '@nextui-org/react';
import { getUserTasks, toggleTaskInDb } from 'db/tasks';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/authContext';

import { TaskBanner } from './Banner';
import { TaskCreator } from './Creator';
import { TaskRow } from './Row';
import { StyledTaskTable } from './styled';
import { VisibilityControl } from './VisibilityControl';

export default function Task() {
  const { userConf, tasks, setTasks } = useAuth();

  const [showCompleted, setShowCompleted] = useState(true);

  const listId = window.localStorage.getItem('listId');
  const listName = window.localStorage.getItem('listName');

  useEffect(() => {
    getUserTasks(listId).then((s) => setTasks(s));
  }, [userConf.email]);

  const createNewTask = (taskName) => {
    if (!tasks.find((t) => t.description === taskName)) {
      setTasks([...tasks, { description: taskName, done: false }]);
    }
  };

  const toggleTask = async (task) => {
    await toggleTaskInDb(task, listId);
    setTasks(
      tasks.map((t) =>
        t.description === task.description ? { ...t, isDone: !t.isDone } : t
      )
    );
  };

  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.isDone === doneValue)
      .map((task) => (
        <TaskRow key={task.id} task={task} toggleTask={toggleTask} />
      ));
  };

  const { isDark } = useTheme();

  return (
    <>
      <TaskBanner listName={listName} taskItems={tasks} />
      <Spacer y={2} />
      <TaskCreator callBack={createNewTask} />

      <StyledTaskTable isDark={isDark}>
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Completada</th>
          </tr>
        </thead>

        <tbody>{taskTableRows(false)}</tbody>
      </StyledTaskTable>

      <div style={{ margion: '0 auto' }}>
        <VisibilityControl
          description="tareas completadas"
          isChecked={showCompleted}
          callBack={(checked) => setShowCompleted(checked)}
        />
      </div>

      {showCompleted && (
        <StyledTaskTable isDark={isDark}>
          <thead>
            <tr>
              <th>Descripción</th>
              <th>Completada</th>
            </tr>
          </thead>

          <tbody>{taskTableRows(true)}</tbody>
        </StyledTaskTable>
      )}
    </>
  );
}
