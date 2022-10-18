import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import mock from "../data.json";
import Item from "./Item";
import ItemDetail from "./ItemDetail";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

function ItemDetailContainer({ handleCartAdd }) {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const docRefMen = doc(db, "zapatillas", id);
    const docRefWomen = doc(db, "mujeres", id);
    const docSnapMen = await getDoc(docRefMen);
    const docSnapWomen = await getDoc(docRefWomen);

    if (docSnapMen.exists()) {
      setDetails({ ...docSnapMen.data(), id: docSnapMen.id });
    }
    if (docSnapWomen.exists()) {
      setDetails({ ...docSnapWomen.data(), id: docSnapWomen.id });
    }
  };

  return details === null ? (
    <p>Loading</p>
  ) : (
    <ItemDetail detail={details} handleCartAdd={handleCartAdd} />
  );
}

export default ItemDetailContainer;
