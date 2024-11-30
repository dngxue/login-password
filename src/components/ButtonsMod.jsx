import ThemeMaterialUI from '../components/ThemeMaterialUI';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

function ButtonsMod({ variant, textCont, clickEvent, width, height, startIcon, type }) {
  // condicion para el color del boton
  const buttonStyle = variant === 'principal' ? {
    backgroundColor: '#E4007C',
    color: '#FFFFFF',
    width: width,
    height: height,
    '&:hover': {
      backgroundColor: '#CA006B',
      transition: '0.4s',
    }
  } : {
    backgroundColor: '#FFFFFF',
    color: '#E4007C',
    width: width,
    height: height,
    '&:hover': {
      backgroundColor: '#E4007C',
      color: '#FFFFFF',
      borderColor: '#FFFFFF',
      transition: '0.4s',
    }
  }

  return (
    <ThemeProvider theme={ThemeMaterialUI}>
      {/* Boton principal */}
      <Button

        variant="outlined"
        startIcon={startIcon}
        sx={buttonStyle}
        onClick={clickEvent}
        type={type}

      >{textCont}</Button>

    </ThemeProvider>
  )
}

export default ButtonsMod