import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
// import axios from "axios";

import api from "../../services/api";
import { login } from "../../services/auth";

import "./Home.css";

const Home = () => {
  const [id, setId] = useState(0);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [history, setHistory] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!id || !user || !pass) {
      alert("Preencha todas as opções!");
    } else {
      try {
        const response = await api.post("Authentication", {
          data: { id, user, pass },
        });
        login(response.data.token);
        setHistory(history.pushState("/users"));
      } catch (err) {
        console.log(err);
      }
    }
  };

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
            <input
              type="number"
              placeholder="branchId"
              onChange={handleId}
              required
            />
            <input
              type="text"
              placeholder="usuario"
              onChange={handleUser}
              required
            />
            <input
              type="password"
              placeholder="senha"
              onChange={handlePass}
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

export default Home;
