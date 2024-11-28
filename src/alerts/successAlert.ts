// successAlert.js
import Swal from 'sweetalert2';

/**
 * Muestra una alerta de éxito con SweetAlert2
 * @param {string} message El mensaje que se mostrará en la alerta
 */
export const showSuccessAlert = (message: string) => {
  Swal.fire({
    icon: 'success',
    title: '¡Éxito!',
    position: 'center',
    text: message,
  });
};
