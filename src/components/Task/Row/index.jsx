export const TaskRow = ({ task, toggleTask }) => (
  <tr key={task.name}>
    <td>{task.name}</td>
    <td>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => toggleTask(task)}
      />
    </td>
  </tr>
);
