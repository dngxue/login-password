import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/NavBar.css';
import logo from '../img/logo-provicional.png';
import avatar from '../img/userFoto.jpg';

function Navbar({ transparentNavbar, lightLink, staticNavbar }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('Nombre de Usuario'); // Simula el nombre del usuario
  const [profileImage, setProfileImage] = useState(avatar);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar la apertura del menú

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  // Función para manejar la apertura y cierre del menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${transparentNavbar ? 'position-fixed' : 'bg-light position-initial'} ${staticNavbar ? 'position-absolute' : ''}`}>
        <div className="mx-3 container-fluid">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img className='logo-img' src={logo} alt="Logo-canasta-basica" />
          </Link>

          {/* Botón de colapso para móvil */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list"></i>
          </button>

          {/* Enlaces del menú */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${lightLink ? 'blanco' : ''}`} to="/">Lugares</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${lightLink ? 'blanco' : ''}`} to="/">Gastronomía</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${lightLink ? 'blanco' : ''}`} to="/">Museos</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${lightLink ? 'blanco' : ''}`} to="/">Generar itinerario</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;