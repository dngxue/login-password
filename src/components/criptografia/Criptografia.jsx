import React from 'react';
import { Container, Stack, Typography, Box, Link } from '@mui/material';
import { TipsAndUpdates as TipsAndUpdatesIcon } from '@mui/icons-material';
import ButtonsMod from '../ButtonsMod';
import { jsPDF } from 'jspdf';
import logo from '../../img/logo-provicional.png';

function Criptografia({ titulo, contenido }) {
  const generarPDF = () => {
    const doc = new jsPDF();
    
    // logo
    const logoWidth = 30;
    const logoHeight = 30;
    doc.addImage(logo, 'PNG', 10, 10, logoWidth, logoHeight);
    // titulo
    doc.setFontSize(18);
    doc.text(titulo, 10, 50);
    // contenido
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 10;
    const contentWidth = pageWidth - 2 * margin;
    doc.setFontSize(12);

    const contenidoLineas = doc.splitTextToSize(contenido, contentWidth);
    let cursorY = 60;
    const lineHeight = 10;

    contenidoLineas.forEach((linea) => {
      const words = linea.split(' ');
      const totalWidth = words.reduce((width, word) => {
        return width + doc.getTextWidth(word + ' ');
      }, 0);

      let extraSpace = 0;
      if (totalWidth < contentWidth && words.length > 1) {
        extraSpace = (contentWidth - totalWidth) / (words.length - 1); 
      }

      let cursorX = margin;
      words.forEach((word, index) => {
        doc.text(word, cursorX, cursorY);
        cursorX += doc.getTextWidth(word + ' ') + extraSpace; 
      });
      cursorY += lineHeight;

      if (cursorY > doc.internal.pageSize.getHeight() - margin) {
        doc.addPage();
        cursorY = margin;
      }
    });

    doc.save(`${titulo}.pdf`);
  }

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
                clickEvent={generarPDF}
            />
        </Box>

      </Container>
  )
}

export default Criptografia;
