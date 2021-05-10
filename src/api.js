// import React, { useState } from "react";

import axios from "axios";

const user = "Guaibim";
const pass = "Gua@123";

const api = axios.create({
  baseURL: "https://guaibim.ajsy.com.br/api/",
  timeout: 1000,
  data: {
    branchId: 1,
    usuario: user,
    senha: pass,
  },
});

// axios
//   .post(`${url}Authentication`, {
//     data: {
//       branchId: 1,
//       usuario: "Guaibim",
//       senha: "Gua@123",
//     },
//     headers: {
//       Authentication: `Bearer ${token}`,
//     },
//   })
//   .then((res) => {
//     console.log(res.data);
//   });

// axios.get(`${url}Usuarios`).then((response) => {
//   setUser(response.data);
// });
// console.log(user);

export default api;
