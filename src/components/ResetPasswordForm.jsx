import PropTypes from 'prop-types'; // Importa PropTypes
import { Card, Box, CardHeader, CardContent, FormControl, TextField } from '@mui/material';
import ButtonsMod from './ButtonsMod.jsx';

const ResetPasswordForm = ({ handlePasswordChange, newPassword, setNewPassword, confirmNewPassword, setConfirmNewPassword}) => {
  return (
    <Card sx={{ padding: '1%', width: '100%', margin: '50px 0 40px 0' }}>
      <CardHeader
        title='Ingresa tu nueva contraseña'
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
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            label='Nueva contraseña'
            type='password'
          />
        </FormControl>

        <FormControl fullWidth size='small'>
          <TextField
            fullWidth
            variant='outlined'
            sx={{ margin: '20px 0 30px 0' }}
            size='small'
            required
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            label='Confirma tu nueva contraseña'
            type='password'
          />
        </FormControl>

        <Box sx={{ display: 'flex', justifyContent: 'right' }}>
          <ButtonsMod
            variant='principal'
            textCont='Aceptar'
            clickEvent={handlePasswordChange}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

ResetPasswordForm.propTypes = {
  handlePasswordChange: PropTypes.func.isRequired,  
  newPassword: PropTypes.string.isRequired,  
  confirmNewPassword: PropTypes.string.isRequired,      
  setNewPassword: PropTypes.func.isRequired,      
  setConfirmNewPassword: PropTypes.func.isRequired 
};

export default ResetPasswordForm;
