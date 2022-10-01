import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";
import mock from "../data.json";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

const ItemListContainer = ({ colRef, greeting, handleCartAdd }) => {
  const [items, setItems] = useState(null);
  const param = useParams();

  const getItems = async () => {
    const docsSnap = await getDocs(colRef);
    const newState = [];
    docsSnap.forEach((doc) => {
      newState.push({ id: doc.id, ...doc.data() });
    });

    setItems(newState);
  };

  useEffect(() => {
    getItems();
  }, [param]);

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
