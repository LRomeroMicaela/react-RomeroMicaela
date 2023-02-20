import React from "react";
import logo from "../../imagenes/logo_chico.jpg";
import Cartwidget from "../CartWidget/Cartwidget";
import "./Navbar.modules.css";

const Navbar = () => {
  return (
    <nav className="navbarContainer">
      <div className="menuLogo">
        <img src={logo} />
      </div>
      <a className="menu">Carrito</a>
      <a className="menu">Ubicación</a>
      <div className="cartIcon">
        <Cartwidget />
      </div>
    </nav>
  );
};

export default Navbar;
