import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import mock from "../data.json";

const ItemListContainer = ({ greeting, handleCartAdd }) => {
  const [items, setItems] = useState(null);

  const getItems = () => {
    setTimeout(() => {
      setItems(mock);
    }, 2000);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <p className="titulo">{greeting}</p>
      {!items ? (
        <h1 className="m-5 p-5">Loading</h1>
      ) : (
        <ItemList items={items} handleCartAdd={handleCartAdd} />
      )}
    </div>
  );
};

export default ItemListContainer;
