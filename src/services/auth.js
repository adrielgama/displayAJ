// import React from 'react'
// import axios from 'axios'
// export const SetToken = () => {
//     const url = "https://guaibim.ajsy.com.br/api/";

//     React.useEffect(() => {
//         axios({
//           method: "POST",
//           url: `${url}Authentication`,
//           data: {
//             branchId: 1,
//             usuario: "Guaibim",
//             senha: "Gua@123",
//           },
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }).then((res) => {
//           setToken(res.data.token);
//           setStatus(res.data.status);
//           setLoading("Loaging axios", true);
//           localStorage.setItem("token", token);
//         });
//       }, [loading, token, status]);
// }

export const TOKEN_KEY = "token";
export const isAuth = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
