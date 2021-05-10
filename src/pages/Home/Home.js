import React, { useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

import "./Home.css";

const Home = () => {
  const [token, setToken] = useState("");
  const url = "https://guaibim.ajsy.com.br/api/";
  // const [id, setId] = useState(0);
  // const [user, setUser] = useState("");
  // const [pass, setPass] = useState("");
  const [status, setStatus] = useState([]);

  const [loading, setLoading] = useState(false);

  ///*
  React.useEffect(() => {
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
      setStatus(res.data.status);
      console.log(status);
      setLoading("Loaging axios", true);
      console.log(loading);
      console.log(token);
      //console.log(res.data);
    });
  }, [loading, token, status]);
  //*/

  console.log(status);
  const handleLogin = (e) => {
    e.preventDefault();
  };

  /*const handleLogin = (e) => {
    e.preventDefault();

    axios({
      method: "GET",
      url: `${url}Usuarios/1`,
      headers: {
          Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      console.log(response)
    })
  };*/

  const handleId = (e) => {
    e.preventDefault();
    setId(e.target.value);
  };
  const handleUser = (e) => {
    e.preventDefault();
    setUser(e.target.value);
  };
  const handlePass = (e) => {
    e.preventDefault();
    setPass(e.target.value);
  };

  return (
    <div className="container">
      <div className="container__login">
        {/*
        <form onSubmit={handleLogin}>
        <form>
        */}
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <div className="box__login">
            <input type="number" placeholder="branchId" onChange={handleId} />
            <input type="text" placeholder="usuario" onChange={handleUser} />
            <input type="password" placeholder="senha" onChange={handlePass} />
          </div>
          <button className="btn__login" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
