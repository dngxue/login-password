import Api from "./api/api.config";
import { showErrorAlert } from "../alerts/errorAlert";
import { showSuccessAlert } from "../alerts/successAlert";
type TypeUser = {
  username: string,
  email: string,
  password: string,
};

const UserService = (() => {
  const registerUser = async (user: TypeUser) => {
    try {
      const response = await Api.post("/register", user);
      if(response.status == 200) {
        showSuccessAlert('Registro completado');
        return response.data;
      }
    } catch (error:any) {
      showErrorAlert(error.response.data.error);
    }
  }

  const sendResetPassword = async (email: string) => {
    try {
      const response = await Api.post("/send-reset-password", {email});
      if(response.status == 200) {
        showSuccessAlert(response.data.message);
      }
    } catch (error:any) {
      showErrorAlert(error.response.data.error);
    }
  }

  const login = async (email: string, password: string) => {
    try {
      const user = { email, password };
      const response = await Api.post("/login", user);
      if(response.status == 200) {
        localStorage.setItem("access_token", response.data.token);
        
        return response.data;
      }
    } catch (error:any) {
      showErrorAlert(error.response.data.error);
    }
  }

  const verifyLogin = async () => {
    try {
      const token = localStorage.getItem("access_token");
      if(token) {
        const response = await Api.get(`/validate-token/${token}`);	
        if(response.status == 200) {
          console.log(response);
        }
        else {
          return false;
        }
      }

      else{
        return false;
      }
    } catch (error:any) {
      showErrorAlert(error.response.data.error);
      return false;
    }
  }

  const verifyVerificationCode = async (code: string, token:string) => {
    try {
      const response = await Api.post(`/validate-code/${token}`, { code });
      showSuccessAlert(response.data.message);
      return response.data.verifyCode;
    } catch (error:any) {
      showErrorAlert(error.response.data.error);
      return false;
    }
  }

  const sendNewPassword = async (token:string, newPassword: string) => {
    try {
      const response = await Api.post(`/reset-password/${token}`, { newPassword });
      showSuccessAlert(response.data.message);
      return response.data.verifyPassword;
    } catch (error:any) {
      showErrorAlert(error.response.data.error);
      return false;
    }
  }

  return {
    registerUser,
    sendResetPassword,
    login,
    verifyLogin,
    verifyVerificationCode,
    sendNewPassword
  }
})();

export default UserService;