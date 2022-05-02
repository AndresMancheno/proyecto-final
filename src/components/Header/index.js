// import { Grid } from '@nextui-org/react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/authContext';

// export default function Header() {
//   const { userName, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     await logout();
//     navigate('/login');
//   };
//   return (
//     <>
//       <Grid.Container gap={2} justify="center">
//         <Grid xs={10}>
//           <h1>Bienvenido {userName}</h1>
//         </Grid>
//         <Grid xs={2}>
//           <button onClick={handleLogout}>Cerrar sesión</button>
//         </Grid>
//       </Grid.Container>
//     </>
//   );
// }
import { Grid, Text } from '@nextui-org/react';
import { useAuth } from '../../context/authContext';
import { Hamburger } from '../../icons/Hamburger';
import IconUser from '../User';
import { HeaderContainer } from './styled';
export default function Header() {
  const { userName } = useAuth();
  return (
    <>
      <HeaderContainer>
        <Grid.Container gap={2} justify="space-around">
          <Grid xs={8} md={10} xl={6}>
            <div>
              <Hamburger fill="currentColor" />
              <Text h2 color="white">
                RGL Notes
              </Text>
            </div>
          </Grid>
          <Grid xs={4} md={2} xl={6}>
            <IconUser />
          </Grid>
        </Grid.Container>
      </HeaderContainer>

      <Text h3 css={{ textAlign: 'center', marginTop: '2rem' }}>
        Bienvenido {userName}
      </Text>
    </>
  );
}
