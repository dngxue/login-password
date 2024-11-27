import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecuperarContrasena from './pages/RecuperarContrasenia.jsx';
import Registro from './pages/Registro.jsx';
import NuevaContrasenia from './pages/NuevaContrasenia.jsx';
import LoginPage from './pages/LoginPage.jsx';
import './css/index.css';
import '@fontsource/montserrat';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/recuperar-contrasenia' element={<RecuperarContrasena />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/nueva-contrasenia' element={<NuevaContrasenia />} />
      </Routes>
    </Router>
  </StrictMode>
);
