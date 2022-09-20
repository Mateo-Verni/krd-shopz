import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import mock from "../data.json";
import Item from "./Item";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer({ handleCartAdd }) {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    setTimeout(() => {
      const data = mock.filter((elemento) => {
        console.log(elemento, parseInt(id));
        return elemento.id === parseInt(id);
      });
      console.log(data);
      if (!data.length) return;
      setDetails(data[0]);
    }, 2000);
  };
  // condicion ? casoTrue : casoFalse

  return details === null ? (
    <p>Loading</p>
  ) : (
    <ItemDetail detail={details} handleCartAdd={handleCartAdd} />
  );
}

export default ItemDetailContainer;
