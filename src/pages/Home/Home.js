import React, { useState } from "react";
import axios from "axios";

// import api from "../../api";
import "./Home.css";

function Home() {
  const [token, setToken] = useState(0);

  axios({
    method: "POST",
    url: "https://guaibim.ajsy.com.br/api/Authentication",
    data: {
      branchId: 1,
      usuario: "Guaibim",
      senha: "Gua@123",
    },
  }).then((res) => {
    setToken(res.data.token);
    // console.log(res.data);
  });
  console.log(token);

  return (
    <div className="container">
      <h1>Olá mundo.</h1>
      <div className="token">
        <p>{token}</p>
      </div>
    </div>
  );
}

export default Home;
