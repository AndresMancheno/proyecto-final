export const TaskRow = ({ key, task, toggleTask }) => (
  <tr key={key} style={{ lineHeight: '3rem' }}>
    <td>{task.description}</td>
    <td>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => toggleTask(task)}
        style={{ cursor: 'pointer' }}
      />
    </td>
  </tr>
);
