import Header from 'components/Header';
import { ProtectedRoute } from 'components/ProtectedRoute';
import Task from 'components/Task';

export default function Tasks() {
  return (
    <ProtectedRoute>
      <Header />
      <Task />
    </ProtectedRoute>
  );
}
