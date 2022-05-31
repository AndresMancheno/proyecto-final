import { Text } from '@nextui-org/react';
import { TitleBanner } from './styled';

export const TaskBanner = ({ listName, taskItems }) => {
  return (
    <>
      <Text
        h2
        css={{
          textGradient: '45deg, $purple600 -20%, $pink600 100%',
          textAlign: 'center',
        }}
        weight="bold"
      >
        {listName}
      </Text>
      <TitleBanner h3>
        {taskItems.filter((t) => !t.isDone).length} tareas por hacer
      </TitleBanner>
    </>
  );
};
