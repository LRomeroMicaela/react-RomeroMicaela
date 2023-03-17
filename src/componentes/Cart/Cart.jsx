import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id}>
            <h2>{elemento.nombre}</h2>
            <h4>{elemento.precio}</h4>
            <h4>{elemento.quantity}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
