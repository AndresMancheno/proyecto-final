import { Text } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import DropdownUser from '../Dropdown/User';

import { GreetingUser, HeaderContainer, HeaderItemContainer } from './styled';
export default function Header() {
  const { userName, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <>
      <HeaderContainer>
        <HeaderItemContainer marginLeft>
          <Text h2 color="#fff">
            RGL Notes
          </Text>
        </HeaderItemContainer>
        <HeaderItemContainer marginRight>
          <DropdownUser />
        </HeaderItemContainer>

      </HeaderContainer>
      <GreetingUser h3>Bienvenid@ {userName}</GreetingUser>
    </>
  );
}
