import { BsBagCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Cartwidget.modules.css";

const Cartwidget = () => {
  return (
    <Link to="/cart">
      <div className="cartIcon">
        <span style={{ textDecoration: "none" }}>0</span>
        <BsBagCheckFill size="30px" />
      </div>
    </Link>
  );
};

export default Cartwidget;

//no me funciona el textdecoration none
