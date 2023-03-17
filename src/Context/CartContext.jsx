import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (producto) => {
    let existe = existeEnCarrito(producto.id);
    if (existe) {
      let newCart = cart.map((elemento) => {
        if (elemento.id === producto.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + producto.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newCart);
    }
    setCart([...cart, producto]);
  };

  const existeEnCarrito = (id) => {
    return cart.some((elemento) => elemento.id === id);
  }; //devuelve un T o F

  let data = {
    cart: cart,
    agregarAlCarrito: agregarAlCarrito,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
