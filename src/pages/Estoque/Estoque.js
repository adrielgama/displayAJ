import React, { useState } from "react";
import axios from "axios";

import Header from "../../components/Header/Header";
import Result from "../../components/Result/Result";

import "./Estoque.css";

const url = "https://guaibim.ajsy.com.br/api/";

const Estoque = () => {
  const [query, setQuery] = useState([]);

  async function estoqueQueue() {
    const token = localStorage.getItem("token");

    // console.log(props);
    return await axios({
      method: "GET",
      url: `${url}Estoque/EstoqueQueue`,
      //   timeout: 1000,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      //   console.log(res.data);
      setQuery(res.data);
      // console.log(res.data.id);
      // console.log(res.data);
    });
  }
  estoqueQueue();
  console.log(query);

  return (
    <div>
      <Header />
      <div className="container__estoque">
        <div className="estoque__title">
          <h1>Estoque</h1>
        </div>
        <div className="content__estoque">
          <>
            {query.map((data, index) => {
              return (
                <Result
                  key={index}
                  idEstoque={data.idEstoque}
                  data={data.dataAlteracao}
                  ean={data.ean}
                  idSKU={data.idSku}
                  sku={data.sku}
                  qtd={data.qtde}
                />
              );
            })}
            <Result />
          </>
        </div>
      </div>
    </div>
  );
};

export default Estoque;
