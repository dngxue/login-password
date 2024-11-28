// modulos importados
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Container, Box, Typography } from '@mui/material';
import { TextField, Grid2 as Grid, FormControl, InputLabel, Card, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FormHelperText from '@mui/material/FormHelperText';

// modulos de iconos
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff, Close as CloseIcon } from '@mui/icons-material';

// componentes importados
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import LeftImage from '../components/login/LeftImage';

// estilos importados
import ThemeMaterialUI from '../components/ThemeMaterialUI';
import '../css/LoginPage.css';

// elementos de la página
import casaLeon from '../img/login/place-img-casadeleon.jpg';

import UserService from '../services/UserService';
import { showSuccessAlert } from '../alerts/successAlert';

function LoginPage() {
  // validacion de correo
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [correoReglas, setCorreoReglas] = useState({
    sinEspacios: false,
    arrobaCaracteres: false,
    dominioConPunto: false,
  });

  const handleCorreoChange = (e) => {
    const correo = e.target.value;
    setCorreo(correo);

    // Validar reglas
    setCorreoReglas({
      sinEspacios: /^[^\s]+$/.test(correo),
      arrobaCaracteres: /^[^@]+@[^@]+$/.test(correo),
      dominioConPunto: /@[^@]+\.[^@]+$/.test(correo),
      noVacio: correo.length > 0,
    });
  };

  const handleContraseñaChange = (e) => {
    setContraseña(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (correoReglas.sinEspacios && correoReglas.arrobaCaracteres && correoReglas.dominioConPunto && correoReglas.noVacio && (contraseña.length > 0)) {
      const response = await UserService.login(correo, contraseña);

      if(response != null) {
        showSuccessAlert('Sesión iniciada correctamente');
        navigate('/home');
      }
    }
  };

  // visibilidad de la contraseña
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  // redireccionamiento a home
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate('/');
  };

  useEffect(() => {
    localStorage.removeItem('access_token');
    console.log(localStorage.getItem('access_token'));
  }, []);

  return (
    <ThemeProvider theme={ThemeMaterialUI}>
      <Box className='login-background'>

        <Box className='lo_pa-container-tool'>
          <Navbar
            transparentNavbar={false}
            lightLink={false}
            staticNavbar={false}
          />
          <Container maxWidth='md' disableGutters className='py-4' sx={{ minHeight: '100vh' }}>

            <Grid container sx={{ justifyContent: 'center', borderRadius: '6px', overflow: 'hidden' }}>
              {/* Lado Izquierdo - Imagen */}
              <Grid size={{ xs: 10, md: 6 }} className='login-left-container'>
                <LeftImage
                  imageUrl={casaLeon} />
              </Grid>

              {/* Lado derecho - Formulario*/}
              <Grid size={{ xs: 12, sm: 10, md: 6 }}>
                <Card className='login-right-form' sx={{ padding: '1%'}}>
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                      <IconButton aria-label='cerrar' onClick={handleHomeClick}>
                        <CloseIcon />
                      </IconButton>
                    </Box>

                    <Box sx={{margin: '0 15px 20px 15px'}}>
                      <Typography variant='h4' sx={{ fontWeight: 'bold', marginBottom: '5px' }}>
                        Iniciar sesión
                      </Typography>
                      <Typography variant='body1' sx={{marginBottom: '20px'}}>
                        Ingresa tus datos para continuar
                      </Typography>

                      <form onSubmit={handleFormSubmit}>
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
                            // errores si no cumple con las reglas
                            error={formSubmitted && !correo}
                            helperText={formSubmitted && !correo ? 'El correo no puede estar vacío' : ''}
                          />
                        </Box>

                        <Box className='my-4'>
                          <FormControl variant='outlined' size='small' fullWidth error={formSubmitted && !contraseña}>
                            <InputLabel htmlFor='log-password' required>Contraseña</InputLabel>
                            <OutlinedInput
                              id='log-password'
                              type={showPassword ? 'text' : 'password'}
                              value={contraseña}
                              onChange={handleContraseñaChange}
                              endAdornment={
                                <InputAdornment position='end'>
                                  <IconButton
                                    aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge='end'
                                  >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                  </IconButton>
                                </InputAdornment>
                              }
                              label='Contraseña'
                            />
                            {formSubmitted && !contraseña && (
                              <FormHelperText>La contraseña no puede estar vacía</FormHelperText>
                            )}
                          </FormControl>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
                          <Button variant='contained' type='submit' >
                            Iniciar sesión
                          </Button>

                          <Link href='/recuperar-contrasenia' underline='hover'>
                            <Typography variant='body2' color='dark' className='mt-4 pb-2'>¿Olvidaste tu contraseña?</Typography>
                          </Link>
                        </Box>
                      </form>

                      <Box>
                        <Typography variant='body2' sx={{ textAlign: 'center' }}>
                          ¿No tienes una cuenta? <Link href='/registro' underline='hover'>Regístrate aquí</Link>
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Grid>

            </Grid>
          </Container>

          <Footer/>
        </Box>
      </Box>
    </ThemeProvider >
  )
}

export default LoginPage