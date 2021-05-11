import axios from "axios";
// import React from "react";
// import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://guaibim.ajsy.com.br/api/",
});

// api.interceptors.request.use(async (config) => {
//   const token = getToken();
//   if (token) {
//     config.headers.Authentication = `Bearer ${token}`;
//   }
//   // console.log(token);
//   return config;
// });

// export const Post = () => {
//   const [token, setToken] = React.useState("");

// const url = "https://guaibim.ajsy.com.br/api/";
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
//     localStorage.setItem("token", token);
//     console.log(res.data);
//   });
// }, [token]);
// };

export default api;
