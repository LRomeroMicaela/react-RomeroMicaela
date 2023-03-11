import { useState, useEffect } from "react";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  const productosFiltrados = products.filter(
    (elemento) => elemento.category === id
  );
  console.log(id);
  console.log(productosFiltrados);
  useEffect(() => {
    const productoLista = new Promise((resolve, reject) => {
      resolve(id ? productosFiltrados : products);
    });

    productoLista.then((ok) => {
      setItems(ok);
    });
    productoLista.catch((error) => console.log(error));
  }, [id]);

  return (
    <div className={styles.contenido}>
      <ItemList items={items} />
    </div>
  );
};
//le paso el array de productos (items) a itemList, donde se mapea cada card
export default ItemListContainer;

//se importa itemList dentro del return
//me falta setTimeOut de 2 segundos... ver!
//con useParams recuperamos la parte dinámica de cada ruta /category
//en el id va a venir la info que necesitamos, si es lentes de sol o armazon
//cada vez que cambie el id se va a volver a renderizar el itemlistcontainer
