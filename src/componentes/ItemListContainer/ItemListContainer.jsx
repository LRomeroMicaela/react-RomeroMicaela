import { useState, useEffect } from "react";
import { products } from "../../productsMock";
import styles from "./ItemListContainer.module.css";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ mensaje }) => {
  const [items, setItems] = useState([]);
  //items donde se guarda productos, setItems es la funcion que se usa para guardar los productos en items
  useEffect(() => {
    const listaProductos = new Promise((resolve, reject) => {
      resolve(products);
    });

    listaProductos.then((ok) => {
      setItems(ok);
    });
    listaProductos.catch((error) => {
      console.log(error);
    });
    //acá se resuelve con ok(guardando los producto en el arreglo items)
    // o se ejecuta el error si no se puede resolver la promesa
  }, []);
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};
//le paso el array de productos (items) a itemList, donde se mapea cada card
export default ItemListContainer;

//se importa itemList dentro del return
//me falta setTimeOut de 2 segundos... ver!
