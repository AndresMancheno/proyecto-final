import { Grid } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { useAuth } from '../context/authContext';
import TaskPage from './taskPage';

export default function Home() {
  const { userName, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <ProtectedRoute>
      <Grid.Container gap={2} justify="center">
        <Grid xs={10}>
          <h1>Bienvenido {userName}</h1>
        </Grid>
        <Grid xs={2}>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </Grid>
      </Grid.Container>

      <TaskPage />
    </ProtectedRoute>
  );
}
