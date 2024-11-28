// modulos importados
import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Container, Box, Typography } from '@mui/material';
import { TextField, Grid2 as Grid, Card, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// modulos de iconos
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff, Close as CloseIcon } from '@mui/icons-material';

// componentes importados
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import LeftImage from '../components/login/LeftImage';

// estilos importados
import ThemeMaterialUI from '../components/ThemeMaterialUI';
import '../css/LoginPage.css';

// elementos de la página
import teotihuacan from '../img/login/piramides-teotihuacan.webp';
import UserService from '../services/UserService';

function LoginPage() {
  // validacion de correo
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');  // Estado para el username
  const [password, setPassword] = useState(''); // Estado para la contraseña
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [correoReglas, setCorreoReglas] = useState({
    sinEspacios: false,
    arrobaCaracteres: false,
    dominioConPunto: false,
    noVacio: false,
  });

  const handleCorreoChange = (e) => {
    const correo = e.target.value;
    setEmail(correo);

    // Validar reglas
    setCorreoReglas({
      sinEspacios: /^[^\s]+$/.test(correo),
      arrobaCaracteres: /^[^@]+@[^@]+$/.test(correo),
      dominioConPunto: /@[^@]+\.[^@]+$/.test(correo),
      noVacio: correo.length > 0,
    });
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (correoReglas.sinEspacios && correoReglas.arrobaCaracteres && correoReglas.dominioConPunto && correoReglas.noVacio) {
      console.log({ username, correo: email, password, confirmPassword });

      if(password == confirmPassword) {
        await UserService.registerUser({
          username,
          email,
          password
        })
      }
    }
  };

  // visibilidad de la contraseña
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <ThemeProvider theme={ThemeMaterialUI}>
      <Box className='login-background'>
        <Box className='lo_pa-container-tool'>
          <Navbar transparentNavbar={false} lightLink={false} staticNavbar={false} />
          <Container maxWidth='md' disableGutters className='py-4'>
            <Grid container sx={{ justifyContent: 'center', borderRadius: '6px', overflow: 'hidden' }}>
              {/* Lado Izquierdo - Imagen */}
              <Grid size={{ xs: 10, md: 6 }} className='login-left-container'>
                <LeftImage imageUrl={teotihuacan} />
              </Grid>

              {/* Lado derecho - Formulario */}
              <Grid size={{ xs: 12, sm: 10, md: 6 }}>
                <Card className='login-right-form' sx={{ padding: '1%' }}>
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                      <IconButton aria-label='cerrar' onClick={handleHomeClick}>
                        <CloseIcon />
                      </IconButton>
                    </Box>

                    <Box sx={{ margin: '0 15px 20px 15px' }}>
                      <Typography variant='h4' sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
                        ¡Regístrate!
                      </Typography>
                      <Typography variant='body1' sx={{ marginBottom: '20px' }}>
                        Llena los siguientes campos para continuar
                      </Typography>

                      <form onSubmit={handleFormSubmit}>
                        <Box className='my-4'>
                          <TextField
                            hiddenLabel
                            required
                            id='log-nombre'
                            label='Nombre de Usuario'
                            size='small'
                            type='text'
                            value={username}
                            onChange={handleUsernameChange}
                            fullWidth
                          />
                        </Box>

                        <Box className='my-4'>
                          <TextField
                            hiddenLabel
                            required
                            id='log-correo'
                            label='Correo electrónico'
                            placeholder='correo@ejemplo.com'
                            size='small'
                            type='text'
                            onChange={handleCorreoChange}
                            fullWidth
                            error={formSubmitted && !email}
                            helperText={formSubmitted && !email ? 'El correo no puede estar vacío' : ''}
                          />
                        </Box>

                        <Typography variant='body2'>
                          La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, un número y un símbolo (como @, #, %).
                        </Typography>

                        <Box className='my-4'>
                          <TextField
                            fullWidth
                            variant='outlined'
                            size='small'
                            required
                            label='Contraseña'
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position='end'>
                                  <IconButton
                                    aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                                    onClick={handleClickShowPassword}
                                    edge='end'
                                  >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Box>

                        <Box className='my-4'>
                          <TextField
                            fullWidth
                            variant='outlined'
                            sx={{ margin: '0px 0 40px 0' }}
                            size='small'
                            required
                            label='Confirmar contraseña'
                            type={showPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position='end'>
                                  <IconButton
                                    aria-label={showConfirmPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                                    onClick={handleClickShowConfirmPassword}
                                    edge='end'
                                  >
                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '40px' }}>
                          <Button variant='contained' type='submit'>
                            Registrarse
                          </Button>
                        </Box>
                      </form>

                      <Box>
                        <Typography variant='body2' className='mt-4 pb-2' sx={{ textAlign: 'center' }}>
                          ¿Ya tienes una cuenta? <Link href='/' underline='hover'>Inicia Sesión</Link>
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Container>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default LoginPage;
