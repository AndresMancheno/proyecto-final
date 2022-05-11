import { Root } from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import IconUser from 'components/Avatar';
import { useAuth } from 'context/authContext';

import { DropdownContent, DropdownItem, UserNameContainer } from './styled';

import UserProfile from 'components/Modal/UserProfile';

export default function DropdownUser() {
  const { logout } = useAuth();
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <Root>
      <UserNameContainer asChild>
        <div aria-label="Customise options">
          <IconUser />
        </div>
      </UserNameContainer>
      <DropdownContent sideOffset={5}>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <DropdownItem onClick={() => setOpen(true)}>
            Editar perfil
          </DropdownItem>
          <DropdownItem onClick={() => handleLogout()}>
            Cerrar sesión
          </DropdownItem>
        </motion.div>
      </DropdownContent>
      <UserProfile open={open} setOpen={setOpen} />
    </Root>
  );
}
