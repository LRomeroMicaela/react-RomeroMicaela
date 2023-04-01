import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import FadeLoader from "react-spinners/FadeLoader";

import styles from "./ItemListContainer.module.css";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const override = {
  display: "block",
  margin: "0 auto",
};

const ItemListContainer = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "products");

    if (category) {
      const qery = query(itemsCollection, where("category", "==", category));
      getDocs(qery).then((ok) => {
        let productos = ok.docs.map((producto) => {
          return {
            ...producto.data(),
            id: producto.id,
          };
        });
        setItems(productos);
      });
    } else {
      getDocs(itemsCollection).then((ok) => {
        let productos = ok.docs.map((producto) => {
          return {
            ...producto.data(),
            id: producto.id,
          };
        });
        setItems(productos);
      });
    }
  }, [category]);

  //renderización

  return (
    <div className={styles.contenido}>
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <div>
          <FadeLoader
            color={"blue"}
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

export default ItemListContainer;
