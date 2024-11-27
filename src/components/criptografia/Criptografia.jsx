import React from 'react';
import { Container, Stack, Typography, Box, Link } from '@mui/material';
import { TipsAndUpdates as TipsAndUpdatesIcon } from '@mui/icons-material';
import ButtonsMod from '../ButtonsMod';

function Criptografia({ titulo, contenido }) {
  return (
      <Container maxWidth='lg' className='sm-4' sx={{ minHeight: '90vh' }}>
        <Box sx={{ marginTop: '30px' }}>
          <Typography variant='body1'>
            <Link href='/home'>Regresar</Link>
          </Typography>
        </Box>
        <Stack direction='row' spacing={1} alignItems='center' className='mb-2' sx={{ marginTop: '30px' }}>
          <TipsAndUpdatesIcon fontSize='large' sx={{ color: '#E4007C', fontSize: {xs: '2rem', md:'2.5rem'} }} />
          <Typography variant='h1' className='fw-bold' sx={{ fontSize: {xs: '2rem', md:'2.5rem'} }}>{titulo}</Typography>
        </Stack>

        <Typography variant='body1' sx={{ textAlign: 'justify', marginTop: '30px' }}>
          {contenido}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '40px', marginBottom: '40px' }}>
            <ButtonsMod
                variant='principal'
                textCont='Descargar PDF'
            />
        </Box>

      </Container>
  )
}

export default Criptografia;
