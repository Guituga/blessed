import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './paginas/Home';
import Contactos from './paginas/Contactos';
import Produtos from './paginas/Produtos';
import Carrinho from './paginas/Carrinho';
import LoginPage from './paginas/LoginPage';

import logo from './imagem/logo.png';

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="d-flex">
        <div className="">
          <img src={logo} alt="logo" width="130" height="90" />
          <Link className="navbar-brand" to="/">
            Blessed Generation
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Produtos">
                Produtos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Carrinho">
                Carrinho
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contactos">
                Contactos
              </Link>
              <li className="nav-item">
              <Link className="nav-link" to="/LoginPage">
                Login
              </Link>
            </li>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;