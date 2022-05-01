import { Input } from '@nextui-org/react';

export const VisibilityControl = (props) => {
  return (
    <>
      <form>
        <input
          label="Mostrar tareas completadas"
          type="checkbox"
          checked={props.isChecked}
          onChange={(e) => props.callBack(e.target.checked)}
        />
        <label>Mostrar {props.description}</label>
      </form>
    </>
  );
};
