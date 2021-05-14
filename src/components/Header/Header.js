import React from "react";
import { IoExitOutline, IoCaretDown } from "react-icons/io5";
import { Link, useHistory } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    let path = "/";
    history.push(path);
  };

  return (
    <>
      <div className="container__header">
        <Link to="/home" className="link__title">
          <h1>AJ - Display</h1>
        </Link>
        <div className="right__nav__content">
          <div className="nav__header">
            <ul>
              <Link to="/estoque">
                <li>Estoque</li>
              </Link>
              <Link to="/lista-itens">
                <li>Lista Itens</li>
              </Link>
              <Link to="/itens-conferidos">
                <li>Itens Conferidos</li>
              </Link>
              <div className="dropdown">
                <button className="dropbtn">
                  <span>Produtos</span>
                  <IoCaretDown />
                </button>
                <div className="dropdown__content">
                  <Link to="/produtos/lista">Todos os Produtos</Link>
                  <Link to="/produtos/sku">Produto por SKU</Link>
                  <Link to="/produtos/data">Produtos por Data</Link>
                </div>
              </div>
            </ul>
          </div>
          <div className="nav__exit">
            <p>Olá {localStorage.getItem("user")},</p>

            {/* <Link to="/" onClick={logout()} className="logout__"> */}
            <button onClick={handleLogout} className="logout__">
              <span>sair</span>
              <IoExitOutline />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
