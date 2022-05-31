import { useTheme } from '@nextui-org/react';
import { useAuth } from 'context/authContext';
import { addTask, getUserTasks } from 'db/tasks';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Send } from '../../../icons/Send';

import { FormContainer, SendButton, StyledInput } from './styled';

export const TaskCreator = ({ callBack, tasks, setTasks }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const { isDark } = useTheme();

  const listId = window.localStorage.getItem('listId');

  const onSubmit = (value) => createNewTask(value.task);

  if (errors.task !== undefined) {
    if (isDark) {
      toast.error(errors.task.message, {
        style: { color: '#fff', background: '#333' },
      });
    } else {
      toast.error(errors.task.message);
    }
    errors.task = undefined;
  }

  const createNewTask = async (value) => {
    if (!tasks.find((t) => t.description === value)) {
      await addTask(value, listId);
      if (isDark) {
        toast.success('Tarea añadida', {
          style: { color: '#fff', background: '#333' },
        });
      } else {
        toast.success('Tarea añadida');
      }
    } else {
      if (isDark) {
        toast.error('Tarea repetida :(', {
          style: { color: '#fff', background: '#333' },
        });
      } else {
        toast.error('Tarea repetida :(');
      }
    }

    getUserTasks(listId).then((tasks) => setTasks(tasks));

    callBack(value);
    reset();
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          bordered
          autoFocus
          placeholder="Crea una tarea..."
          clearable
          name="task"
          aria-label="task"
          {...register('task', {
            required: {
              value: 'true',
              message: 'Campo requerido',
            },
          })}
        />

        <SendButton type="submit">
          <Send />
        </SendButton>
      </FormContainer>
    </>
  );
};
