import Header from 'components/Header';
import List from 'components/Lists';
import { ProtectedRoute } from 'components/ProtectedRoute';

export default function Lists() {
  return (
    <ProtectedRoute>
      <Header />
      <List />
    </ProtectedRoute>
  );
}
