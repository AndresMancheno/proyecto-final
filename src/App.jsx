import { AuthProvider } from 'context/authContext';
import Home from 'pages/home';
import Lists from 'pages/list';
import LoginPage from 'pages/login';
import SignUpPage from 'pages/signUp';
import Tasks from 'pages/task';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<Lists />} />
          <Route path="/task" element={<Tasks />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
