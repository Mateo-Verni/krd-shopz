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
import Cart from "./components/cart";
import { db } from "./firebase";
import { collection } from "firebase/firestore";

const colRefMen = collection(db, "zapatillas");
const colRefWomen = collection(db, "mujeres");

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
              <div className="d-flex flex-column m-auto">
                <h1 className="text-center">Bienvenido a krd-shopz</h1>{" "}
                <img
                  width={1024}
                  height={768}
                  className="m-auto"
                  src="https://media.revistagq.com/photos/5ca600e7267a326aa17256aa/master/w_1600,c_limit/cosas_que_no_sabias_zapatillas_air_jordan_nike_9222.jpg"
                />
              </div>
            }
          />
          <Route
            exact
            path="/men"
            element={
              <ItemListContainer
                greeting="Disfrutá de nuestra mejor selección de Sneakers de hombre!"
                handleCartAdd={onAddCart}
                colRef={colRefMen}
              />
            }
          />
          <Route
            exact
            path="/women"
            element={
              <ItemListContainer
                greeting="Disfrutá de nuestra mejor selección de Sneakers de mujer!"
                handleCartAdd={onAddCart}
                colRef={colRefWomen}
              />
            }
          />
          <Route
            path="/item/:id"
            element={<ItemDetailContainer handleCartAdd={onAddCart} />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
