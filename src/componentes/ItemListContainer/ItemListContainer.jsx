import { useState, useEffect } from "react";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import FadeLoader from "react-spinners/FadeLoader";
import styles from "./ItemListContainer.module.css";

import { collection, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const override = {
  display: "block",
  margin: "0 auto",
};

const ItemListContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  const productosFiltrados = products.filter(
    (elemento) => elemento.category === id
  );

  useEffect(() => {
    // const productoLista = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(id ? productosFiltrados : products);
    //   }, 2000);
    // });

    // productoLista.then((ok) => {
    //   setItems(ok);
    // });
    // productoLista.catch((error) => console.log(error));
    const itemsCollection = collection(db, "products");
    getDoc(itemsCollection).then((ok) => {
      let products = ok.docs.map((element) => {
        return {
          ...element.data(),
          id: element.id,
        };
      });
    });
  }, [id]);

  //renderización

  return (
    <div className={styles.contenido}>
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <div>
          <FadeLoader
            color={"blue"}
            // //loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />{" "}
        </div>
      )}
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
