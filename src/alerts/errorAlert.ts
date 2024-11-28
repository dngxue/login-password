// errorAlert.js
import Swal from 'sweetalert2';

/**
 * Muestra una alerta de error con SweetAlert2
 * @param {string} message El mensaje que se mostrará en la alerta
 */
export function showErrorAlert (message:string) {
  Swal.fire({
    icon: 'error',
    title: '¡Error!',
    position: 'center',
    text: message,
  });
};


