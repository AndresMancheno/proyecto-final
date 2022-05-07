import { Grid } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { ProtectedRoute } from '../components/ProtectedRoute';
import Section from '../components/Section';
import { useAuth } from '../context/authContext';
import TaskPage from './taskPage';

export default function Home() {
  return (
    <ProtectedRoute>
      <Header />
      <Section />
    </ProtectedRoute>
  );
}
