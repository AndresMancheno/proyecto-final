import { DropDown, MenuItem, NavA, Navbar, NavbarNav, NavLi } from './styled';
import { useState } from 'react';

export default function Dropdown(props) {
  return (
    <Navbar>
      <NavbarNav> {props.children} </NavbarNav>
    </Navbar>
  );
}

export function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <NavLi>
      <NavA href="#" onClick={() => setOpen(!open)}>
        {props.icon}
      </NavA>

      {open && props.children}
    </NavLi>
  );
}

export function DropdownMenu() {
  return (
    <DropDown>
      <MenuItem>Crear sección</MenuItem>
      <MenuItem>Ver secciones</MenuItem>
    </DropDown>
  );
}
export function DropdownUser({ logoutFunction }) {
  return (
    <DropDown>
      <MenuItem>Mi perfil</MenuItem>
      <MenuItem onClick={() => logoutFunction()}>Cerrar sesión</MenuItem>
    </DropDown>
  );
}
