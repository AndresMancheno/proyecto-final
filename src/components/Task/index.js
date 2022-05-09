import { Spacer } from '@nextui-org/react';
import { useState } from 'react';
import { useAuth } from '../../context/authContext';

import { TaskBanner } from './Banner';
import { TaskCreator } from './Creator';
import { TaskRow } from './Row';
import { VisibilityControl } from './VisibilityControl';

export default function Task() {
  const { userName } = useAuth();

  const [showCompleted, setShowCompleted] = useState(true);

  const [taskItems, setTaskItems] = useState([
    { name: 'Task One', done: false },
    { name: 'Task Two', done: false },
    { name: 'Task Three', done: false },
    { name: 'Task Four', done: false },
  ]);

  const createNewTask = (taskName) => {
    if (!taskItems.find((t) => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  const taskTableRows = (doneValue) =>
    taskItems
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ));

  return (
    <>
      <TaskBanner userName={userName} taskItems={taskItems} />
      <Spacer y={2} />
      <TaskCreator callBack={createNewTask} />

      <table
        style={{
          margin: '0 auto',
          width: '500px',
          textAlign: 'center',
          marginTop: '2rem',
        }}
      >
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>

        <tbody>{taskTableRows(false)}</tbody>
      </table>

      <div style={{ margion: '0 auto' }}>
        <VisibilityControl
          style={{
            margin: '0 auto',
            width: '500px',
            textAlign: 'center',
            marginTop: '2rem',
          }}
          description="tareas completadas"
          isChecked={showCompleted}
          callBack={(checked) => setShowCompleted(checked)}
        />
      </div>

      {showCompleted && (
        <table
          style={{
            margin: '0 auto',
            width: '500px',
            textAlign: 'center',
            marginTop: '2rem',
          }}
        >
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>

          <tbody>{taskTableRows(true)}</tbody>
        </table>
      )}
    </>
  );
}
