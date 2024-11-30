import axios from "axios";

const Api = axios.create({
  // Desarrollo baseURL: `http://localhost:8080/api/auth`,
  baseURL: process.env.VUE_APP_API_URL
});

export default Api;