import { useState } from 'react';
import Navbar from '../components/NavBar.jsx';
import { Container, Card, Box, Typography, CardHeader, CardContent, FormControl, TextField, Link } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import ThemeMaterialUI from '../components/ThemeMaterialUI.js';
import UserService from '../services/UserService.tsx';
import {useParams } from 'react-router-dom';
import ButtonsMod from '../components/ButtonsMod.jsx';
import ResetPasswordForm from '../components/ResetPasswordForm.jsx';
import { showErrorAlert } from '../alerts/errorAlert.ts';

const ResetPasswordPage = () => {
  const [isValidCode, setIsValidCode] = useState(null);
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const { token } = useParams();

  const handleCode = async () => {
    try {
      const isValid = await UserService.verifyVerificationCode(code, token);
      if(isValid) {
        setIsValidCode(true);
      }

      else {
        setIsValidCode(false);
      }
    } catch (error) {
      console.error('Error al verificar el código', error);
    }
  }

  const handlePasswordChange = async () => {
    if(newPassword == confirmNewPassword) {
      const changePassword = await UserService.sendNewPassword(token, newPassword);
      if(changePassword) {
        // Navegar al login
      }
    }

    else {
      showErrorAlert('La contraseña debe de coincidir');
    }
  }

  if (isValidCode == null) {
    return (
      <ThemeProvider theme={ThemeMaterialUI}>
        <Navbar/>

        <Container maxWidth='lg' sx={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '100vh'}}>
          <Card sx={{ padding: '1%', width: '100%', margin: '50px 0 40px 0' }}>
            <Box sx={{ display: 'flex', justifyContent: 'left', padding: '16px 0 0 16px' }}>
              <Typography variant='body2'>
                <Link href='/'>Volver a inicio de sesión</Link>
              </Typography>
            </Box>
            <CardHeader
              title='Ingresa el código de verificación'
              titleTypographyProps={{
                sx: {
                  fontSize: { xs: '1.5rem', sm: '1.5rem', md: '2.5rem' },
                  fontWeight: 'bold',
                },
              }}
            />
            <CardContent>
              <FormControl fullWidth size='small'>
                <TextField
                  fullWidth
                  variant='outlined'
                  sx={{ margin: '20px 0 30px 0' }}
                  size='small'
                  required
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  label='Código de verificación'
                />
              </FormControl>

              <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                <ButtonsMod
                    variant='principal'
                    textCont='Aceptar'
                    clickEvent={handleCode}
                />
              </Box>
            </CardContent>
          </Card>
        </Container>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={ThemeMaterialUI}>
      <Navbar/>
      <Container maxWidth='lg' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '100vh' }}>
        <ResetPasswordForm
          handlePasswordChange={handlePasswordChange}
          newPassword={newPassword}
          setNewPassword={setNewPassword}
          confirmNewPassword={confirmNewPassword}
          setConfirmNewPassword={setConfirmNewPassword}
        />
      </Container>
    </ThemeProvider>
  )
};

export default ResetPasswordPage;
