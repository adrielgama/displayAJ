import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import { Link, withRouter } from "react-router-dom";
// import api from "../../services/api";

import { login } from "../../controller/Auth/auth";
import "./Login.css";

const url = "https://guaibim.ajsy.com.br/api/";

async function generateToken(token) {
  const props = token;

  // console.log(props);
  return axios({
    method: "POST",
    url: `${url}Authentication`,
    data: {
      branchId: props.data.branchId,
      usuario: props.data.usuario,
      senha: props.data.senha,
    },
  }).then((res) => {
    // console.log(res.data.token);
    // console.log(res.data.id);
    login(res.data.token);
    localStorage.setItem("token", res.data.token);
    // console.log(res.data);
  });
}

const Login = () => {
  const [id, setId] = useState(1);
  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  // const [userAuth, setUserAuth] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await generateToken({
        data: {
          branchId: id,
          usuario: user,
          senha: pass,
        },
      });
      localStorage.setItem("user", user);
      history.push("/users");
    } catch (err) {
      console.log(err);
    }

    // generateToken({
    //   data: {
    //     branchId: id,
    //     usuario: user,
    //     senha: pass,
    //   },
    // });
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
