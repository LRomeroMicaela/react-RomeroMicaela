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
            quantity: producto.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, producto]);
    }
  };

  const existeEnCarrito = (id) => {
    return cart.some((elemento) => elemento.id === id);
  }; //devuelve un T o F, si está o no en el carrito

  //Vaciar carrito
  const limpiarCarrito = () => {
    setCart([]);
  };

  //total elementos del carrito en span
  const totalQuantity = () => {
    return cart.reduce((acumulador, elemento) => {
      return acumulador + elemento.quantity;
    }, 0);
  };

  //Valor total del carrito
  const obtenerTotalPrecio = () => {
    return cart.reduce((acumulador, elemento) => {
      return acumulador + elemento.quantity * elemento.precio;
    }, 0);
  };

  //eliminar ítems del carrito
  const borrarProd = (id) => {
    const newCart = cart.filter((elemento) => elemento.id !== id);
    setCart(newCart);
  };

  //F(x) para que guarde la cant de un prod que seleccionó el usuario
  const getQuantityById = (id) => {
    const cantProdSelec = cart.find((elemento) => elemento.id === id);
    return cantProdSelec?.quantity;
  };

  let data = {
    cart,
    agregarAlCarrito,
    limpiarCarrito,
    totalQuantity,
    obtenerTotalPrecio,
    borrarProd,
    getQuantityById,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
