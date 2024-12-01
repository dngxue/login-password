import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../css/NavBar.css';
import logo from '../img/logo-provicional.png';
import useAuth from '../hooks/useAuth';
import Loading from './Loading';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isLogout, setIsLogout] = useState(false);
  const navigate = useNavigate();
  const handleLogout = async () => {
    setIsLogout(true);
    logout();

    setTimeout(() => {
      navigate('/');
      setIsLogout(false);
    }, 1000);

  }

  if (isLogout) {
    return <Loading message='Cerrando sesión'/>
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light" >
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img className='logo-img' src={logo} alt="Logo-canasta-basica" />
          </Link>

          {/* Botón de colapso para móvil */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list"></i>
          </button>

          {/* Enlaces del menú */}
          <div className="collapse navbar-collapse"  id="navbarNav">
          <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="/home">Home</a>
              </li>

              {/* Mostrar "Iniciar Sesión" y "Registrarse" solo si no está autenticado */}
              {!isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Iniciar Sesión</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/registro">Registrarse</Link>
                  </li>
                </>
              ) : (
                // Mostrar "Cerrar Sesión" si está autenticado
                <li className="nav-item">
                  <button className="nav-link" onClick={handleLogout}>
                    Cerrar Sesión
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;