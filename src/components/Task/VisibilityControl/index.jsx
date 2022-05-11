import { StyledCheckbox, StyledVisilityControl } from './styled';

export const VisibilityControl = (props) => {
  return (
    <>
      <StyledVisilityControl>
        <StyledCheckbox
          label="Mostrar tareas completadas"
          type="checkbox"
          checked={props.isChecked}
          onChange={(e) => props.callBack(e.target.checked)}
        />
        <label>Mostrar {props.description}</label>
      </StyledVisilityControl>
    </>
  );
};
