import React from "react";
import moment from "moment";

import "./Result.css";

const Result = (props) => {
  return (
    <div className="list__cards">
      <ul>
        <li>
          <div className="container__list">
            <div>
              <h1>Estoque: </h1>
              <p>{props.idEstoque}</p>
            </div>
            <div className="data__list">
              <h1>Data Alteração: </h1>
              <p>{moment(props.data).format("DD/MM/YYYY - HH:mm:ss")}</p>
            </div>
            <div>
              <h1>EAN: </h1>
              <p>{props.ean}</p>
            </div>
            <div>
              <h1>ID SKU: </h1>
              <p>{props.idSku}</p>
            </div>
            <div>
              <h1>SKU: </h1>
              <p>{props.sku}</p>
            </div>
            <div>
              <h1>Quantidade: </h1>
              <p>{props.qtd}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Result;
