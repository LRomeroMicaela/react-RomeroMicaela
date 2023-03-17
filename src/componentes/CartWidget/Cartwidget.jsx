import { useContext } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const Cartwidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div className="cartIcon">
        <span style={{ textDecoration: "none" }}>{cart}</span>
        <BsBagCheckFill size="30px" />
      </div>
    </Link>
  );
};

export default Cartwidget;

//no me funciona el textdecoration none
