import { Grid } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { useAuth } from '../context/authContext';
import TaskPage from './taskPage';

export default function Home() {
  return (
    <ProtectedRoute>
      <Header />
    </ProtectedRoute>
  );
}
