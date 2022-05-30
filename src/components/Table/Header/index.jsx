import { HeaderCell } from './styled';

export const HeaderTable = () => {
  const columns = [
    { name: 'Lista', key: 'listName' },
    { name: 'Tag', key: 'listTag' },
    { name: 'Fecha límite', key: 'deadline' },
    { name: 'Descripción', key: 'description' },
    { name: '', key: 'actions' },
  ];

  return (
    <>
      <tr>
        {columns.map((column) => (
          <HeaderCell key={column.key}>{column.name}</HeaderCell>
        ))}
      </tr>
    </>
  );
};
