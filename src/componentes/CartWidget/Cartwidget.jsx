import { BsBagCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

import styles from "../CartWidget/Cartwidget";

const Cartwidget = () => {
  const { totalQuantity } = useContext(CartContext);
  const total = totalQuantity();
  return (
    <Link to="/cart">
      <div className={styles.cartIcon}>
        <span>{total}</span>
        <BsBagCheckFill size="30px" />
      </div>
    </Link>
  );
};

export default Cartwidget;
