import { Grid, Text } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { Hamburger } from '../../icons/Hamburger';
import Dropdown, { DropdownMenu, DropdownUser, NavItem } from '../Dropdown';
import IconUser from '../User';
import { HeaderContainer } from './styled';
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
        <Grid.Container justify="space-around">
          <Grid xs={8} sm={9} md={10}>
            <Dropdown>
              <NavItem icon={<Hamburger />}>
                <DropdownMenu />
              </NavItem>
            </Dropdown>
            <Text h2 color="white">
              RGL Notes
            </Text>
          </Grid>
          <Grid xs={4} sm={3} md={2}>
            <Dropdown>
              <NavItem icon={<IconUser />}>
                <DropdownUser logoutFunction={handleLogout} />
              </NavItem>
            </Dropdown>
          </Grid>
        </Grid.Container>
      </HeaderContainer>

      <Text h3 css={{ textAlign: 'center', marginTop: '2rem' }} color="$yellor">
        Bienvenido {userName}
      </Text>
    </>
  );
}
