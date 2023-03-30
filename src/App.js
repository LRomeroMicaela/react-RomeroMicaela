import React from "react";
import Navbar from "../src/componentes/Navbar/Navbar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Cart from "./componentes/Cart/Cart";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import Form from "./componentes/Formulario/Form";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./Context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="*" element={<h1> Ruta no válida </h1>} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/formulario" element={<Form />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
