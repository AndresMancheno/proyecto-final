import Header from '../components/Header';
import { ProtectedRoute } from '../components/ProtectedRoute';
import Section from '../components/Section';

export default function Home() {
  return (
    <ProtectedRoute>
      <Header />
      <Section />
    </ProtectedRoute>
  );
}
