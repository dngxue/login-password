import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBarHome from '../components/NavBar';
import Footer from '../components/Footer';
import Criptografia from '../components/criptografia/Criptografia';
// estilos y componentes
import ThemeMaterialUI from '../components/ThemeMaterialUI';
import { ThemeProvider } from '@mui/material/styles';

const Historia = () => {
    const location = useLocation();
    const searchParam = new URLSearchParams(location.search);
    const opcion = parseInt(searchParam.get('opcion'), 10);

    const contenidos = [
        {
            titulo:'La escítala espartana',
            contenido:'La escítala era un dispositivo de cifrado usado por los antiguos espartanos (siglo V a.C.) para proteger mensajes confidenciales, especialmente en el ámbito militar. Consistía en un bastón cilíndrico y una tira de cuero que se enrollaba alrededor de él. El mensaje se escribía longitudinalmente en la tira, y al desenrollarla, las letras quedaban desordenadas, volviéndolo ilegible sin un bastón de igual diámetro. Fue utilizada para transmitir órdenes estratégicas y garantizar comunicaciones seguras entre aliados, protegiendo la información de espías y enemigos. Aunque efectiva, tenía limitaciones como la dependencia de bastones idénticos y su simplicidad que podía ser vulnerada si el enemigo obtenía una escítala compatible. Es considerada un precursor de los métodos de cifrado más avanzados y un hito en la historia de la criptografía.',
        },
        {
            titulo: 'Algoritmo de Diffie-Hellman',
            contenido: 'El algoritmo de Diffie-Hellman es un protocolo criptográfico que permite a dos partes generar una clave secreta compartida a través de un canal inseguro, sin necesidad de haber compartido previamente una clave. Fue propuesto en 1976 por Whitfield Diffie y Martin Hellman, y es fundamental para el intercambio de claves seguras en la criptografía moderna. Se utiliza en protocolos como TLS/SSL para asegurar comunicaciones en la web y en VPNs para crear canales seguros. Funciona mediante el intercambio de valores públicos y el cálculo de la clave secreta compartida usando exponentiación modular, lo que hace difícil para los atacantes derivar la clave sin conocer los secretos privados. Es muy seguro, pero no incluye autenticación, por lo que a menudo se combina con otros métodos para garantizar la seguridad total.',
        },
        {
            titulo: '',
            contenido: '',
        }
    ]

    const contenidoSeleccionado = contenidos[opcion] || contenidos[0];

  return (
    <ThemeProvider theme={ThemeMaterialUI}>
        <NavBarHome
            transparentNavbar={false}
        />
            <Criptografia 
                titulo={contenidoSeleccionado.titulo}
                contenido={contenidoSeleccionado.contenido}
            />
      <Footer />
    </ThemeProvider>
  );
};

export default Historia;
