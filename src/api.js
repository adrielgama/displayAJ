import axios from "axios";

const api = axios.create({
  baseURL: "https://guaibim.ajsy.com.br/api/",
  timeout: 1000,
  //   headers: {
  //     "Authentication": `Bearer ${token}`,
  //   },
});

export default api;
