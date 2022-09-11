import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


function App() {
  const [cartQuantity, setCartQuantity] = useState(0)

  const onAddCart = (number) => {
    setCartQuantity(cartQuantity + number)
  }
  
  return ( 
    <>
    <NavBar quantity={cartQuantity}/>
    <ItemListContainer greeting="Titulo o texto provisional" handleCartAdd={onAddCart}/>
    </>
  );
}

export default App;
