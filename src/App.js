import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  const [cartQuantity, setCartQuantity] = useState(0);

  const onAddCart = (number) => {
    setCartQuantity(cartQuantity + number);
  };

  return (
    <BrowserRouter>
      <NavBar quantity={cartQuantity} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ItemListContainer
              greeting="Titulo o texto provisional"
              handleCartAdd={onAddCart}
            />
          }
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
