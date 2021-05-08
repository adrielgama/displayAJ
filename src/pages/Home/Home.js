import React, { useState } from "react";
// import axios from "axios";

import api from "../../api";
import "./Home.css";

function Home() {
  // const [token, setToken] = useState("");
  // const [user, setUser] = useState("");
  // const url = "https://guaibim.ajsy.com.br/api/";
  const [id, setId] = useState(0);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("Authentication", {
        data: {
          branchId: id,
          usuario: user,
          senha: pass,
        },
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("branchId", id);
      localStorage.setItem("usuario", user);
      localStorage.setItem("senha", pass);

      console.log(response.data.token);
    } catch (error) {
      console.log("Error login!");
    }
  }

  // console.log(id, user, pass);

  // axios({
  //   method: "POST",
  //   url: `${url}Authentication`,
  //   data: {
  //     branchId: 1,
  //     usuario: "Guaibim",
  //     senha: "Gua@123",
  //   },
  //   headers: {
  //     Authentication: `Bearer ${token}`,
  //   },
  // }).then((res) => {
  //   setToken(res.data.token);
  //   console.log(res.data);
  // });
  // console.log(token);

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

  return (
    <div className="container">
      <div className="container__login">
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <div className="box__login">
            <input
              type="number"
              placeholder="branchId"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <input
              type="text"
              placeholder="usuario"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <input
              type="password"
              placeholder="senha"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <button className="btn__login" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
