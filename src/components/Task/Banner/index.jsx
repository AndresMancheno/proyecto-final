import { TitleBanner } from './styled';

export const TaskBanner = ({ userName, taskItems }) => {
  return (
    <>
      <TitleBanner h3>
        ` {userName} ` : {taskItems.filter((t) => !t.done).length} tareas por
        hacer
      </TitleBanner>
    </>
  );
};