import React, { useState } from "react";
import PropTypes from "prop-types";
// import { Link, withRouter } from "react-router-dom";
import axios from "axios";

// import api from "../../services/api";
// import { login } from "../../services/auth";

import "./Login.css";
// import api from "../../services/api";

const url = "https://guaibim.ajsy.com.br/api/";

async function getToken(token) {
  console.log(token);

  return axios({
    method: "POST",
    url: `${url}Authentication`,
    data: {
      branchId: 1,
      usuario: "Guaibim",
      senha: "Gua@123",
    },
  }).then((res) => {
    console.log(res.data.token);
    localStorage.setItem("token", token);
    // console.log(res.data);
    console.log("-----------");
  });
}

getToken();

// async function loginUser(credentials) {
//   return fetch(`${url}Authentication`, {
//     method: "POST",
//     data: {
//       credentials,
//     },
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//     body: JSON.stringify(credentials),
//   }).then((response) => {
//     console.log(response);
//     response.json(credentials);
//     console.log(credentials);
//   });
// }

// return api
//   .post("/Authentication", {
//     data: {
//       branchId: 1,
//       usuario: "Guaibim",
//       senha: "Gua@123",
//     },
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//     body: JSON.stringify(credentials),
//   })
//   .then((response) => {
//     response.json(credentials);
//     console.log(response);
//     console.log(credentials);
//   });

// console.log(loginUser());

const Login = ({ setToken }) => {
  const [id, setId] = useState(1);
  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  // const [token, setToken] = useState();
  // const url = "https://guaibim.ajsy.com.br/api/";
  // const [items, setItems] = useState([]);
  // console.log(setToken);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await getToken({
      data: {
        branchId: id,
        usuario: user,
        senha: pass,
      },
    });
    console.log(token);
    setToken(token);
    localStorage.setItem("token", token);
  };

  return (
    <div className="container">
      <div className="container__login">
        <form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <div className="box__login">
            <input
              type="number"
              placeholder="branchId"
              onChange={(e) => setId(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="usuario"
              onChange={(e) => setUser(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="senha"
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </div>
          <button className="btn__login" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

/*
    try {
      const response = await api
        .post("/Authentication", options, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setToken(res.data.token);
          login(res.data.token);
          console.log(token);
        });

      console.log(response);
      setHistory(history.pushState("/users"));
    } catch (err) {
      console.log("Error", err);
    }

    axios({
          method: "POST",
          url: `${url}Authentication`,
          data: {
            branchId: 1,
            usuario: "Guaibim",
            senha: "Gua@123",
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          setToken(res.data.token);
          localStorage.setItem("token", token);
          console.log(res.data);
    */
