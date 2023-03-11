import React from "react";
import Item from "../Item/Item";
import styles from "./ItemList.module.css";

const ItemList = ({ items }) => {
  return (
    <div className={styles.contenedor}>
      {items.map((elemento) => {
        return <Item key={elemento.id} elemento={elemento} />;
      })}
    </div>
  );
};

export default ItemList;

//se importa acá item, que es el código con la estructura de la card
// y se exporta itemList a itemListContainer, acá se hace solo el mapeo
// se renderiza cada card en itemlist.
//se le pasa cada elemento al hijo item a través de elemento
//para que cada producto se mapea con un id distinto se usa element.id
//
