import '../css/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer text-center text-lg-start'>
      <div className='container p-4'>
          <div className='row'>

            <hr className='w-100 clearfix d-md-none' />

            <h6>Síguenos</h6>

            <div className='col d-flex social-media'>
              <Link className='btn btn-primary btn-floating facebook' to='/' role='button'>
                <i className='bi bi-facebook'></i>
              </Link>
              <Link className='btn btn-primary btn-floating twitter' to='/' role='button'>
                <i className='bi bi-twitter-x'></i>
              </Link>
              <Link className='btn btn-primary btn-floating google' to='/' role='button'>
                <i className='bi bi-google'></i>
              </Link>
              <Link className='btn btn-primary btn-floating instagram' to='/' role='button'>
                <i className='bi bi-instagram'></i>
              </Link>
              <Link className='btn btn-primary btn-floating linkedin' to='/' role='button'>
                <i className='bi bi-linkedin'></i>
              </Link>
              <Link className='btn btn-primary btn-floating github' to='/' role='button'>
                <i className='bi bi-github'></i>
              </Link>
            </div>
          </div>
      </div>

      <div className='copyright'>
        © {new Date().getFullYear()} Itinerarios CDMX
      </div>
    </footer>
  );
}

export default Footer;
