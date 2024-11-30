import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecuperarContrasena from './pages/RecuperarContrasenia.jsx';
import Registro from './pages/Registro.jsx';
import ResetPasswordPage from './pages/ResetPasswordPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import HomeUsuario from './pages/HomeUsuario.jsx';
import Historia from './pages/Historia.jsx';
import ProtectedRoute from './components/ProtectedRoutes.tsx';
import './css/index.css';
import '@fontsource/montserrat';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/recuperar-contrasenia' element={<RecuperarContrasena />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/new-pass/:token' element={<ResetPasswordPage />} />
        <Route path='/home' element={<ProtectedRoute element={<HomeUsuario />} />} />
        <Route path='/historia' element={<ProtectedRoute element={<Historia />} />} />
      </Routes>
    </Router>
  </StrictMode>
);
