import { Text } from '@nextui-org/react';

export const TaskBanner = ({ userName, taskItems }) => {
  return (
    <>
      <Text h4 style={{ textAlign: 'center' }}>
        Lista de {userName}: {taskItems.filter((t) => !t.done).length} tareas
        por hacer
      </Text>
    </>
  );
};
