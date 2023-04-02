import { Button } from "@mui/material";

import React, { useEffect } from "react";

import { useState } from "react";

import styles from "./ItemCount.module.css";

const ItemCount = ({ stock, inicial = 0, onAdd }) => {
  const [contador, setContador] = useState(inicial);

  useEffect(() => {
    setContador(inicial);
  }, [inicial]);
  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <div className={styles.botonesContador}>
        <Button variant="contained" onClick={sumar}>
          +
        </Button>

        <h2>{contador}</h2>
        <Button variant="contained" onClick={restar}>
          -
        </Button>
      </div>
      <div className={styles.contador}>
        <Button
          size="small"
          variant="contained"
          onClick={() => onAdd(contador)}
        >
          Agregar al Carrito
        </Button>
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
