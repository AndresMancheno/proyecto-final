import { TitleBanner } from './styled';

export const TaskBanner = ({ listName, taskItems }) => {
  return (
    <>
      <TitleBanner h3>
        {listName} : {taskItems.filter((t) => !t.isDone).length} tareas por
        hacer
      </TitleBanner>
    </>
  );
};
