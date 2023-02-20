import React from "react";
import "./ItemListContainer.modules.css";

const ItemListContainer = (greeting) => {
  return (
    <div>
      <h2 className="mensajeEstilo">{greeting.mensaje}</h2>
    </div>
  );
};

export default ItemListContainer;
