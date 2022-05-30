import { Button, Spacer, useTheme } from '@nextui-org/react';
import { getUserTasks, toggleTaskInDb } from 'db/tasks';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/authContext';

import { TaskBanner } from './Banner';
import { TaskCreator } from './Creator';
import { TaskRow } from './Row';
import { ReturnButton, StyledTaskTable } from './styled';
import { VisibilityControl } from './VisibilityControl';
import { useNavigate } from 'react-router-dom';

export default function Task() {
  const navigate = useNavigate();

  const { userConf, tasks, updateListTasks } = useAuth();

  const [showCompleted, setShowCompleted] = useState(false);

  const listId = window.localStorage.getItem('listId');
  const listName = window.localStorage.getItem('listName');

  useEffect(() => {
    getUserTasks(listId).then((tasks) => updateListTasks(tasks));
  }, [userConf.email]);

  const createNewTask = (taskName) => {
    if (!tasks.find((t) => t.description === taskName)) {
      updateListTasks([...tasks, { description: taskName, done: false }]);
    }
  };

  const toggleTask = async (task) => {
    await toggleTaskInDb(task.description, task.isDone, listId);
    updateListTasks(
      tasks.map((t) =>
        t.description === task.description ? { ...t, isDone: !t.isDone } : t
      )
    );
  };

  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.isDone === doneValue)
      .map((task) => (
        <TaskRow
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          listId={listId}
          taskDone={doneValue === true}
        />
      ));
  };

  const { isDark } = useTheme();

  const returnToMenu = () => {
    navigate('/');
  };

  return (
    <>
      <ReturnButton
        bordered
        color="primary"
        auto
        icon={<ion-icon name="arrow-back-circle-outline" />}
        shadow={isDark}
        onClick={() => {
          returnToMenu();
        }}
      >
        Volver al menú
      </ReturnButton>
      <TaskBanner listName={listName} taskItems={tasks} />
      <Spacer y={2} />
      <TaskCreator callBack={createNewTask} />
      <StyledTaskTable isDark={isDark}>
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Dead Line</th>
            <th>Completada</th>
            <th>Eliminar</th>
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
