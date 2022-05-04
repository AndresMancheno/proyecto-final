import { Root, Trigger } from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/authContext';

import IconUser from '../../Avatar';
import changeNameUser from '../../Modal/User';
import { DropdownContent, DropdownItem } from './styled';

export default function DropdownUser() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const openUserModal = () => {
    console.log(changeNameUser());
  };
  return (
    <Root>
      <Trigger asChild>
        <div aria-label="Customise options">
          <IconUser />
        </div>
      </Trigger>
      <DropdownContent sideOffset={5}>
        <DropdownItem onClick={openUserModal}>Cambiar el nombre</DropdownItem>
        <DropdownItem onClick={() => handleLogout()}>
          Cerrar sesión
        </DropdownItem>
      </DropdownContent>
    </Root>
  );
}
