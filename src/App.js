import "bootstrap/dist/css/bootstrap.css";
import { useState, useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  CreateCartContext,
  CartContext,
} from "./components/context/CartContext";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  const [cartQuantity, setCartQuantity] = useState(0);
  const data = useContext(CreateCartContext);

  const onAddCart = (number) => {
    setCartQuantity(cartQuantity + number);
  };

  return (
    <CartContext>
      <BrowserRouter>
        <NavBar quantity={cartQuantity} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ItemListContainer
                greeting="Disfrutá de nuestra mejor selección de Sneakers!"
                handleCartAdd={onAddCart}
              />
            }
          />
          <Route
            path="/item/:id"
            element={<ItemDetailContainer handleCartAdd={onAddCart} />}
          />
        </Routes>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
