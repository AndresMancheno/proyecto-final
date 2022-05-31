import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './styled.css';
import { IconButton } from './styled';
import toast from 'react-hot-toast';
import { Tooltip, useTheme } from '@nextui-org/react';
import { getUserTasks, removeTaskFromDb, updateDeadLineInDB } from 'db/tasks';
import { Delete } from 'icons/Delete';
import { useAuth } from 'context/authContext';

export const TaskRow = ({ task, toggleTask, listId, taskDone, setTasks }) => {
  const { control } = useForm();

  const [deadLine, setDeadLine] = useState(
    new Date(task.deadLine.seconds * 1000)
  );

  const { isDark } = useTheme();

  const checkDeadLine = async (date, field) => {
    let actualDate = new Date(Date.now());
    actualDate.setHours(0, 0, 0, 0);

    if (actualDate <= date) {
      field.onChange(date);

      try {
        await updateDeadLineInDB(task, listId, date);
        if (isDark) {
          toast.success('Dead line actualizada con éxito ^^', {
            style: { color: '#fff', background: '#333' },
          });
        } else {
          toast.success('Dead line actualizada con éxito ^^');
        }
      } catch (er) {
        if (isDark) {
          toast.error('Ha ocurrido un error al actualizar el dead line :(', {
            style: { color: '#fff', background: '#333' },
          });
        } else {
          toast.error('Ha ocurrido un error al actualizar el dead line :(');
        }
      }
      setDeadLine(date);
    } else {
      if (isDark) {
        toast.error('No puedes viajar al pasado 🤯', {
          style: { color: '#fff', background: '#333' },
        });
      } else {
        toast.error('No puedes viajar al pasado 🤯');
      }
    }
  };

  const removeTask = async (id) => {
    await removeTaskFromDb(id);
    getUserTasks(listId).then((tasks) => setTasks(tasks));
  };

  return (
    <>
      <tr style={{ lineHeight: '3rem' }}>
        <td>{task.description}</td>
        {!taskDone && (
          <td>
            <Controller
              control={control}
              name="date-input"
              render={({ field }) => (
                <DatePicker
                  placeholderText="Select date"
                  onChange={(date) => checkDeadLine(date, field)}
                  selected={deadLine}
                />
              )}
            />
          </td>
        )}

        <td>
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={() => toggleTask(task)}
            style={{ cursor: 'pointer' }}
          />
        </td>
        <td>
          <Tooltip
            content="Eliminar tarea"
            color="error"
            onClick={() => removeTask(task.description)}
          >
            <IconButton>
              <Delete size={20} fill="#FF0080" />
            </IconButton>
          </Tooltip>
        </td>
      </tr>
    </>
  );
};
