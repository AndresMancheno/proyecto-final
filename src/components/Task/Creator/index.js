import { Input } from '@nextui-org/react';
import { useState } from 'react';
import { Send } from '../../../icons/Send';
import { FlexContainer, SendButton } from './styled';

export const TaskCreator = ({ callBack }) => {
  const [newTaskName, setNewTaskName] = useState('');

  const updateNewTaskValue = (e) => setNewTaskName(e.target.value);

  const createNewTask = () => {
    callBack(newTaskName);
    setNewTaskName('');
  };

  return (
    <>
      <FlexContainer>
        <Input
          bordered
          autoFocus
          placeholder="Crea una tarea..."
          clearable
          width="400px"
          css={{ marginRight: '1rem' }}
          name="task"
          aria-label="task"
          value={newTaskName}
          onChange={updateNewTaskValue}
        ></Input>
        <SendButton onClick={createNewTask}>
          <Send />
        </SendButton>
      </FlexContainer>
    </>
  );
};
