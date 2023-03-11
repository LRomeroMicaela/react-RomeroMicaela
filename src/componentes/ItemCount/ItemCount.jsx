import React from "react";

import { useState } from "react";

import styles from "./ItemCount.module.css";

const ItemCount = ({ stock, inicial = 1, onAdd }) => {
  const [contador, setContador] = useState(inicial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  console.log(contador);

  return (
    <div>
      <div className={styles.botonesContador}>
        <button onClick={sumar} className={styles.boton}>
          +
        </button>
        <h2>{contador}</h2>
        <button onClick={restar} className={styles.boton}>
          -
        </button>
      </div>
      <div className={styles.contador}>
        <button onClick={() => onAdd(contador)}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;

//se setea un estado inicial en el useState de 1.
//En contador se va a guardar el n° seleccionado a través de la f(x) setContador.
//funciones sumar y restar para el boton
//stock viene del productoSeleccionado en itemDetailContainer
//agregar al carrito con funcion onadd, callback para que no se ejecute sola porque tiene parámetros
