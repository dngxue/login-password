import React from 'react';
import './css/IniciarSesion.css';
// Material UI
import ThemeMaterialUI from './components/ThemeMaterialUI.js';
import { ThemeProvider } from '@mui/material/styles';
import { Card, TextField, Stack, Typography, Box, Container, Link } from '@mui/material';
// Componentes
import ButtonsMod from './components/ButtonsMod.jsx';
// Imágenes
import bgImg from './img/bg-img.jpg';

function IniciarSesion() {

  return (
    <ThemeProvider theme={ThemeMaterialUI}>
    
    <Box
      className='is_container'
    />
    <Container fixed sx={{ minHeight: '100vh', width: '100%', justifyContent: 'center', display: 'flex', alignItems:'center' }}>
      <Card sx={{ display: 'flex', width: '100%', minHeight: '500px' }}>
        {/* Sección - imagen */}
        <Box
          component='img'
          src={bgImg}
          sx={{
            width: '50%',
            objectFit: 'cover',
            display: {xs: 'none', md: 'block'},
          }}
        />

        {/* Sección - formulario */}
        <Box
          sx={{
            width: {xs: '100%', md: '50%'},
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <Typography variant='h3' className='is_card_titulo' sx={{ marginBottom: '30px', fontWeight: 'bold' }}>
            ¡Bienvenido!
          </Typography>
          <Stack direction='column' sx={{ width: '100%', maxWidth: '400px' }} className='is_card_contenido'>
            <TextField
              className='is_card_textField'
              sx={{ width: '100%', marginBottom: '20px' }}
              required
              label='Nombre de usuario'
            />
            <TextField
              className='is_card_textField'
              sx={{ width: '100%', marginBottom: '20px' }}
              required
              label='Contraseña'
            />
          </Stack>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
            <ButtonsMod 
              variant='principal' 
              textCont='Iniciar sesión' 
              type='submit' />
          </Box>
          <Typography variant='body1' sx={{ marginBottom: '10px' }}>
            <Link href='/recuperar-contrasenia'>
              ¿Olvidaste tu contraseña?
            </Link>
          </Typography>
          <Typography variant='body1' sx={{textAlign: 'center'}}>
            ¿No tienes cuenta? <Link href='/registro'> Regístrate aquí </Link>
          </Typography>
        </Box>
      </Card>

    </Container>
    </ThemeProvider>
  );
}

export default IniciarSesion;
