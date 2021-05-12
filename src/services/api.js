import axios from "axios";

const api = axios.create({
  baseURL: "https://guaibim.ajsy.com.br/api/",
});

export default api;
