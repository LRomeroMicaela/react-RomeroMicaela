import React from "react";
import logo from "../../imagenes/logo_chico.jpg";
import Cartwidget from "../CartWidget/Cartwidget";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <nav className={styles.navbarContainer}>
      <Link to="/">
        <div className={styles.menuLogo}>
          <img src={logo} />
        </div>
      </Link>
      <Link to="/category/lente" className={styles.menu}>
        Lentes de Sol
      </Link>
      <Link to="/category/armazon" className={styles.menu}>
        Armazón
      </Link>
      <Link to="/" className={styles.menu}>
        Todas
      </Link>
      <div className={styles.cartIcon}>
        <Cartwidget />
      </div>
      {children}
    </nav>
  );
};

export default Navbar;

//importo link para que el logo me redireccione al inicio desde otra vista
