import React from "react";
import logo from "../../imagenes/logo_chico.jpg";
import Cartwidget from "../CartWidget/Cartwidget";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <Link to="/">
        <div className={styles.menuLogo}>
          <img src={logo} />
        </div>
      </Link>
      <a className={styles.menu}>Carrito</a>
      <a className={styles.menu}>Ubicación</a>
      <div className={styles.cartIcon}>
        <Cartwidget />
      </div>
    </nav>
  );
};

export default Navbar;

//importo link para que el logo me redireccione al inicio desde otra vista
