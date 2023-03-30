import { BsBagCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

const Cartwidget = () => {
  const { totalQuantity } = useContext(CartContext);
  const total = totalQuantity();
  return (
    <Link to="/cart">
      <div className="cartIcon">
        <span style={{ textDecoration: "none" }}>{total}</span>
        <BsBagCheckFill size="30px" />
      </div>
    </Link>
  );
};

export default Cartwidget;

//no me funciona el textdecoration none
