import React, {useState} from 'react';
import NavBarHome from '../components/NavBar';
import '../css/RecuperarContrasena.css';
// Comopnentes
import ThemeMaterialUI from '../components/ThemeMaterialUI';
import ButtonsMod from '../components/ButtonsMod';
// Material UI
import { InputAdornment, IconButton } from '@mui/material';
import { Container, Card, Box, Typography, CardHeader, CardContent, FormControl, TextField } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
// iconos
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PatternIcon from '@mui/icons-material/Pattern';

const NuevaContrasenia = () => {
  // visibilidad de la contraseña
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <ThemeProvider theme={ThemeMaterialUI}>
      <NavBarHome
        transparentNavbar={false}
        lightLink={false} />
        
      <Container maxWidth='lg' sx={{display:'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '75vh'}}>
        <Card sx={{padding: '1%', width: '100%', margin: '50px 0 40px 0'}}>
            <CardHeader
                className='rc-header-titulo'
                avatar={
                    <PatternIcon className='inc-header-icono' color='primary' sx={{fontSize: '2.5rem'}}/>
                }
                title='Ingresa una nueva contraseña'
                titleTypographyProps={{
                    sx: {
                    fontSize: {xs: '1.5rem', sm: '1.5rem', md: '2.5rem'},
                    fontWeight: 'bold',
                    }
                }}
            />
            <CardContent>
                {/* Texto con los requisitos - ¡¡ Si falta algo, cámbienlo !! */}
                <Typography>
                  Crea una contraseña de al menos 8 caracteres, incluyendo una letra mayúscula, un número y un símbolo (como @, #, %).
                </Typography>
                <FormControl fullWidth size='small'>
                    <TextField
                      fullWidth
                      variant='outlined'
                      sx={{ margin: '20px 0 30px 0' }}
                      size='small'
                      required

                      label='Contraseña'
                      type={showPassword ? 'text' : 'password'}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              aria-label={
                                showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'
                              }
                              onClick={handleClickShowPassword}
                              endge='end'
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                    <TextField
                      fullWidth
                      variant='outlined'
                      sx={{ margin: '0px 0 40px 0' }}
                      size='small'
                      required
                      
                      label='Confirmar contraseña'
                      type={showPassword ? 'text' : 'password'}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              aria-label={
                                showConfirmPassword
                                  ? 'Ocultar contraseña'
                                  : 'Mostrar contraseña'
                              }
                              onClick={handleClickShowConfirmPassword}
                              edge='end'
                            >
                              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                </FormControl>
                
            
                <Box sx={{ display: 'flex', justifyContent: 'right'}}>
                    <ButtonsMod
                        variant='principal'
                        textCont='Aceptar'
                    />
                </Box>

            </CardContent>
        </Card>

      </Container>
    
    </ThemeProvider>
  );

};

export default NuevaContrasenia;
