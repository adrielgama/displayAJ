import React from "react";
import { IoExitOutline, IoCaretDown } from "react-icons/io5";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="container__header">
        <Link to="/users" className="link__title">
          <h1>AJ - Display</h1>
        </Link>
        <div className="right__nav__content">
          <div className="nav__header">
            <ul>
              <Link to="/estoque">
                <li>Estoque</li>
              </Link>
              <Link to="/estoque">
                <li>Lista Itens</li>
              </Link>
              <Link to="/estoque">
                <li>Itens Conferidos</li>
              </Link>
              <div className="dropdown">
                <button className="dropbtn">
                  <span>Produtos</span>
                  <IoCaretDown />
                </button>
                <div className="dropdown__content">
                  <Link to="/produtos/lista">Todos os Produtos</Link>
                  <Link to="/produtos/id">Produto por ID</Link>
                  <Link to="/produtos/data">Produtos por Data</Link>
                </div>
              </div>
            </ul>
          </div>
          <div className="nav__exit">
            <p>Olá {localStorage.getItem("user")},</p>
            <p>sair</p>
            <IoExitOutline />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
