import { changeTheme, Grid, Switch, useTheme } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { useAuth } from '../context/authContext';
import TaskPage from './taskPage';
import Task from '../components/Task';

export default function Home() {
  return (
    <ProtectedRoute>
      <Header />

      <Task />
    </ProtectedRoute>
  );
}
