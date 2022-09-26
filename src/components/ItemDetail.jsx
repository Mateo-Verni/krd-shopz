import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import Item from "./Item";
import { CreateCartContext } from "./context/CartContext";

function ItemDetail({ detail, handleCartAdd }) {
  const { onAdd } = useContext(CreateCartContext);
  const [cart, setCart] = useState(true);
  const [item, setItem] = useState(0);

  const onAddDetail = (item) => {
    onAdd(item);
    setCart(false);
  };

  const handleAddClick = () => {
    setItem(item + 1);
  };

  const handleSubClick = () => {
    setItem(item - 1);
  };

  return (
    <>
      <div className="my-5">
        <div className="card">
          <img
            width={180}
            height={180}
            src={detail.pictureURL}
            alt={detail.description}
          />
          <div className="card-body">
            <h5 className="card-title">{detail.title}</h5>
            <p className="card-text">{detail.description}</p>
            <p className="card-text">{detail.price}</p>
          </div>
        </div>
      </div>
      {cart ? (
        <ItemCount
          initial={item}
          stock={5}
          onAdd={handleAddClick}
          onSub={handleSubClick}
          handleCartAdd={() => onAddDetail({ ...detail, quantity: item })}
        />
      ) : (
        <Link to="/cart">Ir al carrito</Link>
      )}
    </>
  );
}

export default ItemDetail;
