import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://guaibim.ajsy.com.br/api/",
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authentication = `Bearer ${token}`;
  }
  return config;
});

// React.useEffect(() => {
//   axios({
//     method: "POST",
//     url: `${url}Authentication`,
//     data: {
//       branchId: 1,
//       usuario: "Guaibim",
//       senha: "Gua@123",
//     },
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }).then((res) => {
//     setToken(res.data.token);
//     setStatus(res.data.status);
//     setLoading("Loaging axios", true);
//     localStorage.setItem("token", token);
//   });
// }, [loading, token, status]);

export default api;
