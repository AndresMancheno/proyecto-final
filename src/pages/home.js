import Header from 'components/Header';
import { ProtectedRoute } from 'components/ProtectedRoute';
import Task from 'components/Task';

export default function Home() {
  return (
    <ProtectedRoute>
      <Header />
      <Task />
    </ProtectedRoute>
  );
}
