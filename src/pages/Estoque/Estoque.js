import React, { useState } from "react";
import axios from "axios";
import { BiRefresh } from "react-icons/bi";

import Header from "../../components/Header/Header";
import Result from "../../components/Result/Result";

import "./Estoque.css";

const url = "https://guaibim.ajsy.com.br/api/";

const Estoque = () => {
  const [query, setQuery] = useState([]);

  const debounce = (fn, time) => {
    let debounceId = 0;
    return () => {
      clearTimeout(debounceId);
      debounceId = setTimeout(fn, time);
    };
  };

  async function estoqueQueue() {
    const token = localStorage.getItem("token");

    try {
      return await axios({
        method: "GET",
        url: `${url}Estoque/EstoqueQueue`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          setQuery(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }

  const estoqueDebounce = debounce(estoqueQueue, 0);

  return (
    <div>
      <Header />
      <div
        className="container__estoque"
        // onClick={setTimeout(estoqueQueue, 2000)}
      >
        <div className="btn__refresh">
          <button
            onClick={estoqueDebounce}
            // onClick={estoqueQueue}
            id="refreshBtn"
          >
            <BiRefresh />
          </button>
        </div>
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
