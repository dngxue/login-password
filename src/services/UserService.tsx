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
        return response.data;
      }
    } catch (error:any) {
      showErrorAlert(error.response.data.error);
    }
  }

  return {
    registerUser
  }
})();

export default UserService;