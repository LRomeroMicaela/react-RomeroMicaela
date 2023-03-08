import React from "react";
import logo from "../../imagenes/logo_chico.jpg";
import Cartwidget from "../CartWidget/Cartwidget";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.menuLogo}>
        <img src={logo} />
      </div>
      <a className={styles.menu}>Carrito</a>
      <a className={styles.menu}>Ubicación</a>
      <div className={styles.cartIcon}>
        <Cartwidget />
      </div>
    </nav>
  );
};

export default Navbar;
