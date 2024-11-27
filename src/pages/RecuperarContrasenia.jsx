import React, { useState } from 'react';
import '../css/RecuperarContrasena.css';
//  Material UI
import ThemeMaterialUI from '../components/ThemeMaterialUI';
import { Container, Card, Box, Link, Typography, CardHeader, CardContent, TextField } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
// Íconos
import LockResetIcon from '@mui/icons-material/LockReset';
// Componentes
import ButtonsMod from '../components/ButtonsMod';

const RecuperarContrasenia = () => {

  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [touched, setTouched] = useState(false);

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  const handleEmailChange = (e) => {
    const nuevoEmail = e.target.value;
    setEmail(nuevoEmail);

    if (touched) {
      setError(!validarEmail(nuevoEmail));
    }
  }

  const handleSend = () => {
    setTouched(true);

    if (validarEmail(email)) {
      setError(false);
      console.log('Correo enviado a: ', email);
    } else {
      setError(true);
      console.log('Correo inválido. No es posible mandar el correo');
    }
  }

  return (
    <ThemeProvider theme={ThemeMaterialUI}>
      <Box
        className='is_container'
      />
      <Container maxWidth='lg' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '75vh' }}>
        <Card sx={{ padding: '1%', width: '100%', margin: '50px 0 40px 0' }}>
            <Box sx={{ display: 'flex', justifyContent: 'left', padding: '16px 0 0 16px' }}>
                <Typography variant='body2'>
                    <Link href='/'>Volver a inicio de sesión</Link>
                </Typography>
            </Box>
            <CardHeader
                className='rc-header-titulo'
                avatar={
                <LockResetIcon className='rc-header-icono' color='primary' sx={{ fontSize: '2.5rem' }} />
                }
                title='Restablece tu contraseña'
                titleTypographyProps={{
                sx: {
                    fontSize: { xs: '1.8rem', sm: '1.8rem', md: '2.5rem' },
                    fontWeight: 'bold',
                }
                }}
            />
            <CardContent>
                <Typography>
                Ingresa tu correo electrónico en el campo a continuación y te enviaremos un enlace para restablecer tu contraseña.
                </Typography>
                <TextField
                fullWidth
                variant='outlined'
                size='small'
                required
                label='Correo electrónico'
                sx={{ margin: '20px 0 40px 0' }}
                value={email}
                onChange={handleEmailChange}
                error={touched && error}
                helperText={touched && error ? 'Por favor, ingresa un correo electrónico válido.' : ''}
                />
                <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                <ButtonsMod
                    variant='principal'
                    textCont='Enviar'
                    clickEvent={handleSend}
                />
                </Box>
            </CardContent>
        </Card>


      </Container>
    </ThemeProvider>
  );

};

export default RecuperarContrasenia;
