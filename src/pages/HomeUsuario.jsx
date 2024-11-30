import { useNavigate } from 'react-router-dom';
import NavBarHome from '../components/Navbar';
import Footer from '../components/Footer';
import ButtonsMod from '../components/ButtonsMod';
// estilos y componentes
import ThemeMaterialUI from '../components/ThemeMaterialUI';
import { Container, Stack, Typography, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

// ÍCONOS
import HomeIcon from '@mui/icons-material/Home';

const HomeUsuario = () => {
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const handleClasicaClick = () => {
    navigate('/historia?opcion=0');
  }

  const handleModernaClick = () => {
    navigate('/historia?opcion=1');
  }

  const handleTendenciaClick = () => {
    navigate('/historia?opcion=1');
  }

  return (
    <ThemeProvider theme={ThemeMaterialUI}>
      <NavBarHome
        transparentNavbar={false}
        lightLink={false} />

      <Container maxWidth='lg' className='sm-4' sx={{ minHeight: '90vh' }}>
        { /* Sección - Header */}
        <Stack direction='row' spacing={1} alignItems='center' className='mb-2' sx={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
          <HomeIcon fontSize='large' sx={{ color: '#E4007C', fontSize: {xs: '1.5rem', sm: '2rem'} }} />
          <Typography variant='h1' className='fw-bold' sx={{ fontSize: {xs: '1.5rem', sm: '2rem'} }}>Bienvenido {username}</Typography>
        </Stack>

        <Stack direction='column' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '10px' }}>
            <ButtonsMod
              variant='secundario'
              textCont='Criptografía clásica'
              clickEvent={handleClasicaClick}
              width={{xs: '100%', sm: '70%', md: '50%'}}
            />
          </Box>

          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '10px' }}>
            <ButtonsMod
              variant='secundario'
              textCont='Criptografía moderna'
              clickEvent={handleModernaClick}
              width={{xs: '100%', sm: '70%', md: '50%'}}
            />
          </Box>


          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '10px' }}>
            <ButtonsMod
              variant='secundario'
              textCont='Tendencias criptográficas'
              clickEvent={handleTendenciaClick}
              width={{xs: '100%', sm: '70%', md: '50%'}}
            />
          </Box>
      </Stack>
      </Container>

      <Footer />
    </ThemeProvider>
  );
};

export default HomeUsuario;
