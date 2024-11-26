import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IniciarSesion from './IniciarSesion.jsx';
import RecuperarContrasena from './RecuperarContrasenia.jsx';
import Registro from './Registro.jsx';
import './css/index.css';
import '@fontsource/montserrat';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<IniciarSesion />} />
        <Route path='/recuperar-contrasenia' element={<RecuperarContrasena />} />
        <Route path='/registro' element={<Registro />} />
      </Routes>
    </Router>
  </StrictMode>
);
