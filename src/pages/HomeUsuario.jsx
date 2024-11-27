import React from 'react';
import NavBarHome from '../components/NavBar';
import Footer from '../components/Footer';
// estilos y componentes
import ThemeMaterialUI from '../components/ThemeMaterialUI';
import { Container, Stack, Typography, Link } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

// ÍCONOS
import { TipsAndUpdates as TipsAndUpdatesIcon } from '@mui/icons-material';


const GenerarItinerario = () => {

  return (
    <ThemeProvider theme={ThemeMaterialUI}>
      <NavBarHome
        transparentNavbar={false}
        lightLink={false} />

      <Container maxWidth='lg' className='sm-4' sx={{ minHeight: '90vh' }}>
        { /* Sección - Header */}
        <Stack direction='row' spacing={1} alignItems='center' className='mb-2' sx={{ marginTop: '30px' }}>
          <TipsAndUpdatesIcon fontSize='large' sx={{ color: '#E4007C', fontSize: '3rem' }} />
          <Typography variant='h1' className='fw-bold' sx={{ fontSize: '3rem' }}>Bienvenido [usuario]</Typography>
        </Stack>

        <Typography variant='body1'>
          <Link href='#'>Criptografía Clásica</Link>
        </Typography>
        <Typography variant='body1'>
          <Link href='#'>Criptografía Moderna</Link>
        </Typography>
        <Typography variant='body1'>
          <Link href='#'>Tendencias criptográficas</Link>
        </Typography>

      </Container>

      <Footer />
    </ThemeProvider>
  );
};

export default GenerarItinerario;
